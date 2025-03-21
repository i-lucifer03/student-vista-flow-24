
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VisaOptionCardProps {
  visa: {
    id: string;
    name: string;
    country: string;
    icon: string; // URL to country flag or visa icon
    description: string;
    processingTime: string;
    requirements: string[];
  };
  className?: string;
}

const VisaOptionCard = ({ visa, className }: VisaOptionCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-low card-hover border border-gray-100",
      className
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className="size-12 rounded-md overflow-hidden">
          <img 
            src={visa.icon} 
            alt={`${visa.country} flag`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{visa.name}</h3>
          <p className="text-sm text-gray-500">{visa.country}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{visa.description}</p>
      
      <div className="mb-4">
        <p className="text-xs font-medium text-gray-500 mb-1">Processing Time</p>
        <p className="text-sm">{visa.processingTime}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-xs font-medium text-gray-500 mb-1">Key Requirements</p>
        <ul className="text-sm space-y-1">
          {visa.requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald mr-2">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      
      <Button className="w-full bg-ocean hover:bg-ocean-light group">
        <span>View Details</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default VisaOptionCard;
