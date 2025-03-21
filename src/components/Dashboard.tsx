
import { BarChart3, Calendar, FileText, Users, ArrowUp, ArrowDown, TrendingUp, Zap } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/StatCard";
import LeadCard from "@/components/LeadCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

// Sample data for charts and analytics
const weeklyData = [
  { name: "Mon", education: 4, work: 2, visitor: 1, total: 7 },
  { name: "Tue", education: 3, work: 1, visitor: 2, total: 6 },
  { name: "Wed", education: 5, work: 3, visitor: 1, total: 9 },
  { name: "Thu", education: 2, work: 2, visitor: 3, total: 7 },
  { name: "Fri", education: 4, work: 1, visitor: 2, total: 7 },
  { name: "Sat", education: 1, work: 0, visitor: 1, total: 2 },
  { name: "Sun", education: 0, work: 0, visitor: 0, total: 0 },
];

const monthlyData = [
  { name: "Jan", applications: 12 },
  { name: "Feb", applications: 19 },
  { name: "Mar", applications: 15 },
  { name: "Apr", applications: 27 },
  { name: "May", applications: 32 },
  { name: "Jun", applications: 38 },
  { name: "Jul", applications: 42 },
  { name: "Aug", applications: 45 },
  { name: "Sep", applications: 48 },
  { name: "Oct", applications: 51 },
  { name: "Nov", applications: 55 },
  { name: "Dec", applications: 60 },
];

const applicationStatusData = [
  { name: "Pending", value: 45, color: "#ED8936" },
  { name: "In Progress", value: 42, color: "#4299E1" },
  { name: "Approved", value: 156, color: "#48BB78" },
  { name: "Rejected", value: 32, color: "#FC8181" },
];

const visaTypeData = [
  { name: "Education", value: 132, color: "#2C5282" },
  { name: "Work", value: 78, color: "#48BB78" },
  { name: "Visitor", value: 65, color: "#4299E1" },
];

const recentActivities = [
  { id: 1, action: "Application submitted", client: "Emily Johnson", date: "Today, 10:30 AM", status: "pending" },
  { id: 2, action: "Documents uploaded", client: "Michael Wang", date: "Today, 09:15 AM", status: "in_progress" },
  { id: 3, action: "Visa approved", client: "Sarah Miller", date: "Yesterday, 03:45 PM", status: "approved" },
  { id: 4, action: "Application rejected", client: "David Kim", date: "Yesterday, 11:20 AM", status: "rejected" },
  { id: 5, action: "Follow-up scheduled", client: "Jessica Brown", date: "Oct 15, 2023", status: "in_progress" },
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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dashboard Updated",
        description: "Latest metrics and analytics are now available",
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, [toast]);

  const statusColors = {
    pending: "bg-amber/10 text-amber",
    in_progress: "bg-ocean-light/10 text-ocean-light",
    approved: "bg-emerald/10 text-emerald",
    rejected: "bg-coral/10 text-coral",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Quick metrics summary */}
      <div className="col-span-1 md:col-span-12">
        <div className="bg-white rounded-lg p-4 shadow-low mb-6">
          <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
          <p className="text-sm text-gray-600 mb-4">
            Track your agency's performance metrics and visa application trends over time.
          </p>
        </div>
      </div>
      
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

      {/* Growth metrics */}
      <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Conversion Rate"
          value="64.2%"
          trend={{ value: 3.5, isPositive: true }}
          icon={<TrendingUp className="h-5 w-5" />}
          className="border-l-4 border-emerald"
        />
        <StatCard 
          title="Avg. Processing Time"
          value="12 days"
          trend={{ value: 2, isPositive: true }}
          icon={<Zap className="h-5 w-5" />}
          className="border-l-4 border-ocean-light"
        />
        <StatCard 
          title="Revenue (MTD)"
          value="$14,580"
          trend={{ value: 7.8, isPositive: true }}
          icon={<ArrowUp className="h-5 w-5" />}
          className="border-l-4 border-emerald"
        />
        <StatCard 
          title="Client Retention"
          value="82%"
          trend={{ value: 1.2, isPositive: false }}
          icon={<ArrowDown className="h-5 w-5" />}
          className="border-l-4 border-coral"
        />
      </div>

      {/* Charts row */}
      <div className="col-span-1 md:col-span-8">
        <div className="bg-white rounded-lg p-4 shadow-low">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Weekly Applications</h2>
            <div className="text-xs text-gray-500">Last 7 days</div>
          </div>
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

        <div className="bg-white rounded-lg p-4 shadow-low mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Growth Trend</h2>
            <div className="text-xs text-gray-500">Year to date</div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="applications" stroke="#2C5282" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie charts */}
      <div className="col-span-1 md:col-span-4">
        <div className="bg-white rounded-lg p-4 shadow-low">
          <h2 className="text-lg font-semibold mb-4">Application Status</h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={applicationStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {applicationStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {applicationStatusData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-1">
                <div style={{ backgroundColor: entry.color }} className="size-3 rounded-full"></div>
                <span className="text-xs">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-low mt-6">
          <h2 className="text-lg font-semibold mb-4">Visa Types</h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={visaTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {visaTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {visaTypeData.map((entry) => (
              <div key={entry.name} className="flex items-center gap-1">
                <div style={{ backgroundColor: entry.color }} className="size-3 rounded-full"></div>
                <span className="text-xs">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="col-span-1 md:col-span-6">
        <div className="bg-white rounded-lg p-4 shadow-low h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="text-sm text-ocean hover:underline">
              View all
            </button>
          </div>
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Activity</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.action}</TableCell>
                    <TableCell>{activity.client}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[activity.status as keyof typeof statusColors]}`}>
                        {activity.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Recent leads */}
      <div className="col-span-1 md:col-span-6">
        <div className="bg-white rounded-lg p-4 shadow-low h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <button className="text-sm text-ocean hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {mockLeads.map((lead) => (
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
