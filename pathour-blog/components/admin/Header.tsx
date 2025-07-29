'use client';

import Link from 'next/link';

export default function AdminHeader() {
  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin5">
          <Link className="navbar-brand" href="/dashboard">
            <b className="logo-icon">
              <img src="/assets/images/logo-icon.png" alt="homepage" className="light-logo" />
            </b>
            <span className="logo-text">
              <img src="/assets/images/logo-text.png" alt="homepage" className="light-logo" />
            </span>
          </Link>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
          {/* Kamu bisa tambahkan menu atau user dropdown di sini */}
        </div>
      </nav>
    </header>
  );
}
