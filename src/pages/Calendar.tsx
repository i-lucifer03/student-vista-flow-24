
import { useState } from "react";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Calendar as CalendarComponent, DayContentProps } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Mock events for the calendar
const events = [
  { id: 1, title: "Embassy Interview - Johnson Family", date: "2023-08-05", type: "interview" },
  { id: 2, title: "Document Submission - Li Chen", date: "2023-08-10", type: "submission" },
  { id: 3, title: "Visa Decision - Williams", date: "2023-08-15", type: "decision" },
  { id: 4, title: "Client Meeting - Rodriguez Family", date: "2023-08-18", type: "meeting" },
  { id: 5, title: "Passport Collection - Smith", date: "2023-08-22", type: "collection" },
  { id: 6, title: "Consultation - New Client", date: "2023-08-25", type: "consultation" },
];

// Get events for a specific date
const getEventsForDate = (date: Date) => {
  const dateString = format(date, "yyyy-MM-dd");
  return events.filter(event => event.date === dateString);
};

// Custom renderer for calendar days
const CustomDay = (props: DayContentProps) => {
  const date = props.date;
  const dayEvents = getEventsForDate(date);
  
  // Get the default rendered day
  const defaultDay = props.children;
  
  return (
    <div className="relative w-full h-full">
      {defaultDay}
      {dayEvents.length > 0 && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
          {dayEvents.length > 2 ? (
            <Badge variant="secondary" className="h-1 w-4 p-0" />
          ) : (
            dayEvents.map((event, i) => (
              <Badge 
                key={event.id} 
                variant="secondary" 
                className={cn(
                  "h-1 w-1 p-0 rounded-full",
                  event.type === "interview" && "bg-blue-500",
                  event.type === "submission" && "bg-green-500",
                  event.type === "decision" && "bg-amber-500",
                  event.type === "meeting" && "bg-purple-500",
                  event.type === "collection" && "bg-cyan-500",
                  event.type === "consultation" && "bg-rose-500",
                )} 
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

const CalendarPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<string>("month");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const selectedDateEvents = getEventsForDate(date);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Calendar | VisaFlow CRM</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className="pt-20 pb-6 px-4 md:px-6 md:ml-64">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Calendar</h1>
              <div className="flex gap-3">
                <Select value={view} onValueChange={setView}>
                  <SelectTrigger className="w-[130px]">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="day">Day</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="btn-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  New Event
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-lg shadow-low p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {format(date, "MMMM yyyy")}
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => {
                      const prev = new Date(date);
                      prev.setMonth(prev.getMonth() - 1);
                      setDate(prev);
                    }}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => {
                      const next = new Date(date);
                      next.setMonth(next.getMonth() + 1);
                      setDate(next);
                    }}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md border"
                  components={{
                    DayContent: CustomDay
                  }}
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-low p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {format(date, "MMMM d, yyyy")}
                </h2>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className="p-3 rounded-md border border-gray-100 hover:bg-gray-50">
                        <h3 className="font-medium text-gray-800">{event.title}</h3>
                        <div className="flex items-center mt-2">
                          <Badge className={cn(
                            "mr-2",
                            event.type === "interview" && "bg-blue-500",
                            event.type === "submission" && "bg-green-500",
                            event.type === "decision" && "bg-amber-500",
                            event.type === "meeting" && "bg-purple-500",
                            event.type === "collection" && "bg-cyan-500",
                            event.type === "consultation" && "bg-rose-500",
                          )}>
                            {event.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{format(new Date(event.date), "h:mm a")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="mx-auto h-10 w-10 text-gray-300 mb-2" />
                    <p className="text-gray-500">No events scheduled for this day</p>
                    <Button variant="outline" className="mt-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Event
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CalendarPage;
