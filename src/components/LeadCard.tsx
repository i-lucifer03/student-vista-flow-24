
import { cn } from "@/lib/utils";
import { FileText, MoreHorizontal, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface LeadCardProps {
  lead: {
    id: string;
    name: string;
    email: string;
    visaType: "education" | "work" | "visitor";
    country: string;
    status: "pending" | "in_progress" | "approved" | "rejected";
    date: string;
  };
  className?: string;
}

const LeadCard = ({ lead, className }: LeadCardProps) => {
  const statusColors = {
    pending: "bg-amber/10 text-amber",
    in_progress: "bg-ocean-light/10 text-ocean-light",
    approved: "bg-emerald/10 text-emerald",
    rejected: "bg-coral/10 text-coral",
  };

  const visaTypeColors = {
    education: "bg-ocean/10 text-ocean",
    work: "bg-emerald/10 text-emerald",
    visitor: "bg-ocean-light/10 text-ocean-light",
  };

  return (
    <div className={cn(
      "bg-white rounded-lg p-4 shadow-low card-hover border border-gray-100",
      className
    )}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-md bg-ocean/10 flex items-center justify-center text-ocean">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">{lead.name}</h3>
            <p className="text-sm text-gray-500">{lead.email}</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Application</DropdownMenuItem>
            <DropdownMenuItem>Edit Details</DropdownMenuItem>
            <DropdownMenuItem className="text-coral">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="secondary" className={visaTypeColors[lead.visaType]}>
          {lead.visaType.charAt(0).toUpperCase() + lead.visaType.slice(1)}
        </Badge>
        <Badge variant="outline">{lead.country}</Badge>
        <Badge variant="secondary" className={statusColors[lead.status]}>
          {lead.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </Badge>
      </div>
      
      <div className="flex items-center text-xs text-gray-500 mt-2">
        <Calendar className="h-3 w-3 mr-1" />
        <span>{lead.date}</span>
      </div>
    </div>
  );
};

export default LeadCard;
