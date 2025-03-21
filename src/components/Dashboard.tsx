
import { BarChart3, Calendar, FileText, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import StatCard from "@/components/StatCard";
import LeadCard from "@/components/LeadCard";

const weeklyData = [
  { name: "Mon", education: 4, work: 2, visitor: 1 },
  { name: "Tue", education: 3, work: 1, visitor: 2 },
  { name: "Wed", education: 5, work: 3, visitor: 1 },
  { name: "Thu", education: 2, work: 2, visitor: 3 },
  { name: "Fri", education: 4, work: 1, visitor: 2 },
  { name: "Sat", education: 1, work: 0, visitor: 1 },
  { name: "Sun", education: 0, work: 0, visitor: 0 },
];

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
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Stats row */}
      <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Applications"
          value="243"
          trend={{ value: 12, isPositive: true }}
          icon={<FileText className="h-5 w-5" />}
        />
        <StatCard 
          title="Pending Applications"
          value="45"
          trend={{ value: 8, isPositive: false }}
          icon={<Calendar className="h-5 w-5" />}
        />
        <StatCard 
          title="Approved Applications"
          value="156"
          trend={{ value: 23, isPositive: true }}
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <StatCard 
          title="Total Clients"
          value="87"
          trend={{ value: 5, isPositive: true }}
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      {/* Charts and activity */}
      <div className="col-span-1 md:col-span-8">
        <div className="bg-white rounded-lg p-4 shadow-low">
          <h2 className="text-lg font-semibold mb-4">Weekly Applications</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="education" stackId="a" fill="#2C5282" radius={[4, 4, 0, 0]} />
                <Bar dataKey="work" stackId="a" fill="#48BB78" radius={[4, 4, 0, 0]} />
                <Bar dataKey="visitor" stackId="a" fill="#4299E1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent leads */}
      <div className="col-span-1 md:col-span-4">
        <div className="bg-white rounded-lg p-4 shadow-low h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <button className="text-sm text-ocean hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {mockLeads.slice(0, 3).map((lead) => (
              <div 
                key={lead.id} 
                className="flex items-center gap-3 p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="size-10 rounded-full bg-ocean/10 flex items-center justify-center text-ocean">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{lead.name}</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-ocean-light/10 text-ocean-light">
                      {lead.visaType}
                    </span>
                    <span className="text-xs text-gray-500">{lead.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent applications */}
      <div className="col-span-1 md:col-span-12">
        <div className="bg-white rounded-lg p-4 shadow-low">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Applications</h2>
            <button className="text-sm text-ocean hover:underline">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
