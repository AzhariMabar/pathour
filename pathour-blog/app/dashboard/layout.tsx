// app/dashboard/layout.tsx

import '@/public/assets/css/argon-dashboard.css';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header'; // (akan kita buat)
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <AdminSidebar />
      <div className="main-panel">
        <AdminHeader />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}
