
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Globe, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VisaOptionCard from "@/components/VisaOptionCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const mockVisaOptions = [
  {
    id: "1",
    name: "Student Visa (Subclass 500)",
    country: "Australia",
    icon: "https://flagcdn.com/w80/au.png",
    description: "For international students to study at recognized Australian educational institutions.",
    processingTime: "4-6 weeks",
    requirements: [
      "Proof of enrollment",
      "Genuine temporary entrant statement",
      "Financial evidence",
      "English proficiency"
    ]
  },
  {
    id: "2",
    name: "Tier 4 Student Visa",
    country: "United Kingdom",
    icon: "https://flagcdn.com/w80/gb.png",
    description: "For students aged 16 or over who want to study at a UK educational institution.",
    processingTime: "3 weeks",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of funds",
      "English language test",
      "TB test certificate (if applicable)"
    ]
  },
  {
    id: "3",
    name: "F-1 Student Visa",
    country: "United States",
    icon: "https://flagcdn.com/w80/us.png",
    description: "For academic students attending U.S. educational institutions.",
    processingTime: "2-3 months",
    requirements: [
      "Form I-20",
      "SEVIS fee payment",
      "Evidence of financial support",
      "Academic preparedness"
    ]
  },
  {
    id: "4",
    name: "Study Permit",
    country: "Canada",
    icon: "https://flagcdn.com/w80/ca.png",
    description: "Required for foreign nationals to study at designated learning institutions in Canada.",
    processingTime: "4-8 weeks",
    requirements: [
      "Letter of acceptance",
      "Proof of financial support",
      "Intent to leave Canada",
      "Police clearance certificate"
    ]
  },
  {
    id: "5",
    name: "Working Holiday Visa",
    country: "Australia",
    icon: "https://flagcdn.com/w80/au.png",
    description: "Allows young adults to work and travel in Australia for up to 12 months.",
    processingTime: "2-4 weeks",
    requirements: [
      "Age 18-30",
      "Valid passport",
      "Sufficient funds",
      "No dependent children"
    ]
  },
  {
    id: "6",
    name: "Tier 2 Work Visa",
    country: "United Kingdom",
    icon: "https://flagcdn.com/w80/gb.png",
    description: "For skilled workers with a job offer from a UK employer with a valid sponsor license.",
    processingTime: "3-8 weeks",
    requirements: [
      "Certificate of Sponsorship",
      "Salary threshold",
      "English language test",
      "Maintenance funds"
    ]
  },
  {
    id: "7",
    name: "Electronic Travel Authority (ETA)",
    country: "Australia",
    icon: "https://flagcdn.com/w80/au.png",
    description: "Electronic visa for short-term visits for tourism or business purposes.",
    processingTime: "1-3 days",
    requirements: [
      "Valid passport",
      "Good health",
      "Good character",
      "No outstanding debts to Australian government"
    ]
  },
  {
    id: "8",
    name: "Standard Visitor Visa",
    country: "United Kingdom",
    icon: "https://flagcdn.com/w80/gb.png",
    description: "For visiting the UK for tourism, business, or to visit family for up to 6 months.",
    processingTime: "3 weeks",
    requirements: [
      "Proof of travel plans",
      "Accommodation details",
      "Financial evidence",
      "Intent to leave the UK"
    ]
  },
];

const CountriesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter visa options based on search query and active tab
  const filteredOptions = mockVisaOptions.filter((option) => {
    const matchesSearch = 
      option.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    
    if (activeTab === "education") {
      return matchesSearch && option.name.toLowerCase().includes("student");
    }
    
    if (activeTab === "work") {
      return matchesSearch && (option.name.toLowerCase().includes("work") || option.name.toLowerCase().includes("tier 2"));
    }
    
    if (activeTab === "visitor") {
      return matchesSearch && (option.name.toLowerCase().includes("visit") || option.name.toLowerCase().includes("eta") || option.name.toLowerCase().includes("travel"));
    }
    
    return false;
  });

  return (
    <>
      <Helmet>
        <title>Countries & Visas | VisaFlow CRM</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="pt-20 pb-6 px-4 md:px-6 md:ml-64">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Countries & Visa Options</h1>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search countries or visa types..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean/30 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all" className="px-6">All Visas</TabsTrigger>
                <TabsTrigger value="education" className="px-6">Education</TabsTrigger>
                <TabsTrigger value="work" className="px-6">Work</TabsTrigger>
                <TabsTrigger value="visitor" className="px-6">Visitor</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {filteredOptions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOptions.map((visa) => (
                  <VisaOptionCard key={visa.id} visa={visa} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Globe className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-1">No visa options found</h3>
                <p className="text-gray-500">Try adjusting your search query or filters</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default CountriesPage;
