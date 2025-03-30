
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock calendar events
const mockEvents = [
  {
    id: "1",
    title: "Client Meeting - Emily Johnson",
    date: new Date(2024, 3, 15),
    type: "meeting",
    status: "confirmed"
  },
  {
    id: "2",
    title: "Document Submission Deadline - Michael Wang",
    date: new Date(2024, 3, 20),
    type: "deadline",
    status: "pending"
  },
  {
    id: "3",
    title: "Interview Preparation - Sarah Miller",
    date: new Date(2024, 3, 18),
    type: "preparation",
    status: "confirmed"
  },
  {
    id: "4",
    title: "Embassy Appointment - David Kim",
    date: new Date(2024, 3, 25),
    type: "appointment",
    status: "confirmed"
  },
  {
    id: "5",
    title: "Follow-up Call - Emma Rodriguez",
    date: new Date(2024, 3, 16),
    type: "call",
    status: "pending"
  }
];

const CalendarPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const eventsForSelectedDate = selectedDate 
    ? mockEvents.filter(event => 
        event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear())
    : [];

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
              <Button className="btn-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Calendar widget */}
              <div className="bg-white rounded-lg shadow-low p-4 md:col-span-1">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                  classNames={{
                    day_selected: "bg-ocean text-ocean-foreground",
                    day_today: "bg-accent text-accent-foreground",
                  }}
                  components={{
                    DayContent: ({ day, date }) => {
                      // Check if this date has events
                      const hasEvents = mockEvents.some(event => 
                        event.date.getDate() === date.getDate() &&
                        event.date.getMonth() === date.getMonth() &&
                        event.date.getFullYear() === date.getFullYear()
                      );
                      
                      return (
                        <div className="relative flex items-center justify-center">
                          {date.getDate()}
                          {hasEvents && (
                            <div className="absolute bottom-0 w-1 h-1 bg-coral rounded-full" />
                          )}
                        </div>
                      );
                    }
                  }}
                />
              </div>
              
              {/* Events for selected date */}
              <div className="bg-white rounded-lg shadow-low p-4 md:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Select a date"}
                  </h2>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => {
                        if (selectedDate) {
                          const newDate = new Date(selectedDate);
                          newDate.setDate(newDate.getDate() - 1);
                          setSelectedDate(newDate);
                        }
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => {
                        if (selectedDate) {
                          const newDate = new Date(selectedDate);
                          newDate.setDate(newDate.getDate() + 1);
                          setSelectedDate(newDate);
                        }
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {eventsForSelectedDate.length > 0 ? (
                  <div className="space-y-3">
                    {eventsForSelectedDate.map((event) => (
                      <div 
                        key={event.id} 
                        className={cn(
                          "p-3 rounded-md border-l-4",
                          event.type === "meeting" && "border-ocean bg-ocean/5",
                          event.type === "deadline" && "border-coral bg-coral/5",
                          event.type === "preparation" && "border-amber-500 bg-amber-50",
                          event.type === "appointment" && "border-indigo-500 bg-indigo-50",
                          event.type === "call" && "border-emerald-500 bg-emerald-50",
                        )}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{event.title}</h3>
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            event.status === "confirmed" && "bg-emerald-100 text-emerald-700",
                            event.status === "pending" && "bg-amber-100 text-amber-700",
                          )}>
                            {event.status === "confirmed" ? "Confirmed" : "Pending"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {format(event.date, "h:mm a")}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-1">No events scheduled</h3>
                    <p className="text-gray-500 mb-4">There are no events scheduled for this date</p>
                    <Button className="btn-primary">Add Event</Button>
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
