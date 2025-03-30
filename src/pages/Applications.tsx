
import { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Calendar, 
  Filter, 
  Plus, 
  Search 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import LeadCard from "@/components/LeadCard";
import { Button } from "@/components/ui/button";
import CountrySelector from "@/components/CountrySelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockLeads = [
  {
    id: "1",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    visaType: "education" as const,
    country: "Australia",
    status: "in_progress" as const,
    date: "Aug 12, 2023"
  },
  {
    id: "2",
    name: "Michael Wang",
    email: "m.wang@example.com",
    visaType: "work" as const,
    country: "Canada",
    status: "pending" as const,
    date: "Aug 15, 2023"
  },
  {
    id: "3",
    name: "Sarah Miller",
    email: "sarah.m@example.com",
    visaType: "visitor" as const,
    country: "United Kingdom",
    status: "approved" as const,
    date: "Aug 10, 2023"
  },
  {
    id: "4",
    name: "David Kim",
    email: "d.kim@example.com",
    visaType: "education" as const,
    country: "United States",
    status: "rejected" as const,
    date: "Aug 5, 2023"
  },
  {
    id: "5",
    name: "Emma Rodriguez",
    email: "emma.r@example.com",
    visaType: "work" as const,
    country: "Germany",
    status: "pending" as const,
    date: "Aug 16, 2023"
  },
  {
    id: "6",
    name: "James Smith",
    email: "james.s@example.com",
    visaType: "visitor" as const,
    country: "France",
    status: "in_progress" as const,
    date: "Aug 11, 2023"
  },
  {
    id: "7",
    name: "Sophia Li",
    email: "sophia.l@example.com",
    visaType: "education" as const,
    country: "Japan",
    status: "approved" as const,
    date: "Aug 8, 2023"
  },
  {
    id: "8",
    name: "Oliver Garcia",
    email: "oliver.g@example.com",
    visaType: "work" as const,
    country: "Singapore",
    status: "in_progress" as const,
    date: "Aug 14, 2023"
  },
];

const ApplicationsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter leads based on search query and filter selections
  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry = selectedCountry ? lead.country === selectedCountry : true;
    const matchesVisaType = selectedVisaType && selectedVisaType !== "all-types" ? lead.visaType === selectedVisaType : true;
    const matchesStatus = selectedStatus && selectedStatus !== "all-statuses" ? lead.status === selectedStatus : true;
    
    return matchesSearch && matchesCountry && matchesVisaType && matchesStatus;
  });

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
            
            {/* Filters and search */}
            <div className="bg-white rounded-lg shadow-low p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean/30 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-3">
                  <Select value={selectedVisaType} onValueChange={setSelectedVisaType}>
                    <SelectTrigger className="w-full md:w-[180px] bg-white">
                      <SelectValue placeholder="Visa Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">All Types</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="visitor">Visitor</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full md:w-[180px] bg-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-statuses">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <CountrySelector 
                    selectedCountry={selectedCountry}
                    onSelect={setSelectedCountry}
                    className="w-full md:w-[180px]"
                  />
                  
                  <Button variant="outline" className="border-gray-200 bg-white" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Applications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-1">No applications found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
                  <Button className="btn-primary">Create New Application</Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ApplicationsPage;
