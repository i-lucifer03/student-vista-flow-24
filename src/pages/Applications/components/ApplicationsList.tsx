
import { Calendar } from "lucide-react";
import LeadCard from "@/components/LeadCard";
import { Button } from "@/components/ui/button";
import { useLeadData } from "../hooks/useLeadData";

interface ApplicationsListProps {
  searchQuery: string;
  selectedCountry: string;
  selectedVisaType: string;
  selectedStatus: string;
  startDate: Date | null;
  endDate: Date | null;
}

const ApplicationsList = ({
  searchQuery,
  selectedCountry,
  selectedVisaType,
  selectedStatus,
  startDate,
  endDate,
}: ApplicationsListProps) => {
  const { filteredLeads } = useLeadData({
    searchQuery,
    selectedCountry,
    selectedVisaType,
    selectedStatus,
    startDate,
    endDate,
  });

  return (
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
  );
};

export default ApplicationsList;
