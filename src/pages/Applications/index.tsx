
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import ApplicationsFilters from "./components/ApplicationsFilters";
import ApplicationsList from "./components/ApplicationsList";

const ApplicationsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Applications | VisaFlow CRM</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="pt-20 pb-6 px-4 md:px-6 md:ml-64">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Applications</h1>
              <Button className="btn-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Application
              </Button>
            </div>
            
            <ApplicationsFilters 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              selectedVisaType={selectedVisaType}
              setSelectedVisaType={setSelectedVisaType}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            
            <ApplicationsList 
              searchQuery={searchQuery}
              selectedCountry={selectedCountry}
              selectedVisaType={selectedVisaType}
              selectedStatus={selectedStatus}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default ApplicationsPage;
