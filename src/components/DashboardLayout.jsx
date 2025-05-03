import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">CUNY Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Opportunities</a>
          <a href="#" className="hover:text-blue-400">Students</a>
          <a href="#" className="hover:text-blue-400">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
