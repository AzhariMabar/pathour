'use client';

import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="p-t-30">
            <li className="sidebar-item">
              <Link className="sidebar-link waves-effect waves-dark sidebar-link" href="/dashboard">
                <i className="mdi mdi-view-dashboard"></i>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link waves-effect waves-dark sidebar-link" href="/dashboard/event">
                <i className="mdi mdi-calendar"></i>
                <span className="hide-menu">Events & Blogs</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link waves-effect waves-dark sidebar-link" href="/dashboard/member">
                <i className="mdi mdi-account-multiple"></i>
                <span className="hide-menu">Members</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link waves-effect waves-dark sidebar-link" href="/logout">
                <i className="mdi mdi-logout"></i>
                <span className="hide-menu">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
