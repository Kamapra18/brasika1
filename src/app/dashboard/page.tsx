"use client";

import Sidebar from "./sidebar";
import HomeDashboardView from "./home";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        <HomeDashboardView />
      </main>
    </div>
  );
}
