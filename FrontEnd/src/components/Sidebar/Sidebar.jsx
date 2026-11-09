import Style from './Sidebar.module.css'
import Logo from "../../../public/Flugur_Logo_v2.png"
import { UseAuth } from '../context/authContext';
// import { NavLink } from 'react-router'
import { useState } from 'react';
// import { LayoutGrid, BookOpen, FileText, Users, Settings, LogOut, ChevronDown, ChevronRight, Wallet, Wrench } from "lucide-react";

//   { label: "Fixed Assets", icon: Wrench, path: "/Dashboard/Asset", roles: ["Accountant"]
//   },
//   { label: "Reports", icon: FileText, path: "/Dashboard/reports", roles: ["Accounting Manager"]
//   },
//   { label: "User Management", icon: Users, path: "/Dashboard/users", roles: ["Admin"]
//   },
//   { label: "Settings", icon: Settings, path: "/Dashboard/settings", roles: ["Admin"]
//   }
// ];


import { NavLink, useNavigate } from 'react-router'
import { Home, Users, Database, CalendarCheck2, Calendar, FolderOpen, CardSim, Landmark, BriefcaseBusiness, GraduationCap, LogOut, ChartSpline, FlaskConical, Video,
  BookOpen, FileText, Wallet
 } from "lucide-react";

const NAV_SECTIONS = [
  {
    items: [
      { label: "Overview", icon: Home, path: "/Dashboard" },
    ],
  },
  {
    title: "Accounting",
    items: [
      { label: "Ledger Accounts", icon: BookOpen, path: "/Dashboard/Ledger" },
      { label: "Journal Headers", icon: BookOpen, path: "/Dashboard/Journal" },
    ],
  },
  {
    title: "Invoices",
    items: [
      { label: "Accounts Payable", icon: FileText, path: "/Dashboard/AP_Invoices" },
      { label: "Accounts Receivable", icon: FileText, path: "/Dashboard/AR_Invoices" },
    ],
  },
  {
    title: "Clients",
    items: [
      { label: "Vendors", icon: Users, path: "/Dashboard/Vendors" },
      { label: "Customers", icon: Users, path: "/Dashboard/Customers" },
    ],
  },
  {
    title: "Payments",
    items: [
      { label: "AP Payments", icon: Wallet, path: "/Dashboard/AP_Payment" },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "User Management", icon: Users, path: "/Dashboard/users"},
    ],
  },
];

export default function Sidebar() {
  // const { user, Logout } = UseAuth();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   Logout();
  //   navigate("/", { replace: true });
  // };

  return (
    <aside className={Style.umsidebar}>
      <div className={Style.umbrand}>
        <div className={Style.umbrandmark}>
          <img src={Logo} alt="Flugur" />
        </div>
        <div>
          <div className={Style.umbrandname}>Flugur ERP</div>
          <div className={Style.umbrandtag}>Intelligence Dashboard</div>
        </div>
      </div>

      <nav className={Style.umnav}>
        {NAV_SECTIONS.map((section, sIdx) => (
          <div key={section.title || `section-${sIdx}`} className={Style.umsection}>
            {section.title && (
              <div className={Style.umsectionTitle}>{section.title}</div>
            )}
            {section.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === "/" || item.path === "/Dashboard"}
                className={({ isActive }) =>
                  `${Style.umnavitem} ${isActive ? Style.umactive : ""}`
                }
              >
                <item.icon size={18} strokeWidth={1.75} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      {/* <div className={Style.umsidebarfooter}>
        <div className={Style.umusermini}>
          <div className={Style.umuseravatar} />
          <div>
            <div className={Style.umusername}>{user?.name || user?.email || "User"}</div>
            <div className={Style.umuserrole}>{user?.role || "User"}</div>
          </div>
        </div>
        <button type="button" className={Style.umlogout} onClick={handleLogout} aria-label="Log out" title="Log out">
          <LogOut size={16} />
        </button>
      </div> */}
    </aside>
  );
}
