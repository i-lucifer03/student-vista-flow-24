
import { useMemo } from "react";
import { isWithinInterval, parseISO } from "date-fns";

// Types
export interface Lead {
  id: string;
  name: string;
  email: string;
  visaType: "education" | "work" | "visitor";
  country: string;
  status: "pending" | "in_progress" | "approved" | "rejected";
  date: string;
}

interface UseLeadDataProps {
  searchQuery: string;
  selectedCountry: string;
  selectedVisaType: string;
  selectedStatus: string;
  startDate?: Date | null;
  endDate?: Date | null;
}

// Mock data
const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    visaType: "education",
    country: "Australia",
    status: "in_progress",
    date: "Aug 12, 2023"
  },
  {
    id: "2",
    name: "Michael Wang",
    email: "m.wang@example.com",
    visaType: "work",
    country: "Canada",
    status: "pending",
    date: "Aug 15, 2023"
  },
  {
    id: "3",
    name: "Sarah Miller",
    email: "sarah.m@example.com",
    visaType: "visitor",
    country: "United Kingdom",
    status: "approved",
    date: "Aug 10, 2023"
  },
  {
    id: "4",
    name: "David Kim",
    email: "d.kim@example.com",
    visaType: "education",
    country: "United States",
    status: "rejected",
    date: "Aug 5, 2023"
  },
  {
    id: "5",
    name: "Emma Rodriguez",
    email: "emma.r@example.com",
    visaType: "work",
    country: "Germany",
    status: "pending",
    date: "Aug 16, 2023"
  },
  {
    id: "6",
    name: "James Smith",
    email: "james.s@example.com",
    visaType: "visitor",
    country: "France",
    status: "in_progress",
    date: "Aug 11, 2023"
  },
  {
    id: "7",
    name: "Sophia Li",
    email: "sophia.l@example.com",
    visaType: "education",
    country: "Japan",
    status: "approved",
    date: "Aug 8, 2023"
  },
  {
    id: "8",
    name: "Oliver Garcia",
    email: "oliver.g@example.com",
    visaType: "work",
    country: "Singapore",
    status: "in_progress",
    date: "Aug 14, 2023"
  },
];

export const useLeadData = ({
  searchQuery,
  selectedCountry,
  selectedVisaType,
  selectedStatus,
  startDate,
  endDate,
}: UseLeadDataProps) => {
  
  // Filter leads based on search query, filter selections, and date range
  const filteredLeads = useMemo(() => {
    return mockLeads.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCountry = selectedCountry ? lead.country === selectedCountry : true;
      const matchesVisaType = selectedVisaType && selectedVisaType !== "all-types" ? lead.visaType === selectedVisaType : true;
      const matchesStatus = selectedStatus && selectedStatus !== "all-statuses" ? lead.status === selectedStatus : true;
      
      // Date range filtering
      let matchesDateRange = true;
      if (startDate && endDate) {
        const leadDate = parseISO(lead.date.split(',')[0] + ' 2023'); // Convert string date to Date object
        matchesDateRange = isWithinInterval(leadDate, { start: startDate, end: endDate });
      }
      
      return matchesSearch && matchesCountry && matchesVisaType && matchesStatus && matchesDateRange;
    });
  }, [searchQuery, selectedCountry, selectedVisaType, selectedStatus, startDate, endDate]);

  return {
    leads: mockLeads,
    filteredLeads,
  };
};
