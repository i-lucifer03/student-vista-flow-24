
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-4 shadow-low card-hover", 
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium flex items-center",
                trend.isPositive ? "text-emerald" : "text-coral"
              )}>
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        
        <div className="size-10 rounded-md bg-ocean-light/10 flex items-center justify-center text-ocean">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
