// app/dashboard/page.tsx

import React from 'react';

export default function DashboardIndexPage() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">123</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Events</h5>
              <p className="card-text">9 active</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Posts</h5>
              <p className="card-text">5 published</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome to Admin Dashboard</h5>
              <p className="card-text">You can manage users, posts, and settings from here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
