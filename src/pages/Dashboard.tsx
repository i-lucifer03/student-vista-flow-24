
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
                <p className="text-gray-500 text-sm mt-1">
                  Track your agency's performance and visa application trends
                </p>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-pulse">
                <div className="col-span-12 h-16 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-8 h-96 bg-gray-200 rounded-lg"></div>
                <div className="col-span-4 h-96 bg-gray-200 rounded-lg"></div>
              </div>
            ) : (
              <Dashboard />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
