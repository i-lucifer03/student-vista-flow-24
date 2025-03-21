
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | VisaFlow CRM</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="pt-20 pb-6 px-4 md:px-6 md:ml-64">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <Dashboard />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
