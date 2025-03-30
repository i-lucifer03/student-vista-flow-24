
import { Search, Filter } from "lucide-react";
import CountrySelector from "@/components/CountrySelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ApplicationsFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedVisaType: string;
  setSelectedVisaType: (visaType: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

const ApplicationsFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedVisaType,
  setSelectedVisaType,
  selectedStatus,
  setSelectedStatus,
}: ApplicationsFiltersProps) => {
  return (
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
  );
};

export default ApplicationsFilters;
