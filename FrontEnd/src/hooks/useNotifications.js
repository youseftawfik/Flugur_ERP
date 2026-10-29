import { useEffect, useState, useMemo } from "react";
import { connectSocket } from "../socket";
import api from "../components/api";

export function useNotification(token) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!token) return;

    api
      .get("dashboard/my-notifications")
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const socket = connectSocket(token);

    socket.on("notification", (newNotification) => {
      setNotifications((prev) => [newNotification, ...prev]);
    });

    return () => {
      socket.off("notification");
    };
  }, [token]);

  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.readAt).length;
  }, [notifications]);

  const markAsRead = async (id) => {
    try {
      await api.patch(`dashboard/notifications/${id}/read`);

      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, readAt: new Date() } : n)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await api.delete(`dashboard/notifications/${id}`);
      setNotifications((prev) => prev.filter((n) => n._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await api.patch("dashboard/notifications/read-all");

      setNotifications((prev) =>
        prev.map((n) => (n.readAt ? n : { ...n, readAt: new Date() })),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { notifications, unreadCount, markAsRead, deleteNotification, markAllAsRead };
}
