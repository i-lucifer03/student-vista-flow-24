
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, ArrowLeft, HelpCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Generate suggestions based on the current path
    const path = location.pathname.toLowerCase();
    const newSuggestions: string[] = ["/dashboard"];

    // Add specific suggestions based on the path
    if (path.includes("app")) newSuggestions.push("/applications");
    if (path.includes("count")) newSuggestions.push("/countries");
    if (path.includes("cal")) newSuggestions.push("/calendar");
    if (path.includes("setting")) newSuggestions.push("/settings");
    if (path.includes("client")) newSuggestions.push("/clients");
    if (path.includes("report")) newSuggestions.push("/reports");

    // For visa type specific paths
    if (path.includes("education") || path.includes("study")) 
      newSuggestions.push("/applications/education");
    if (path.includes("work") || path.includes("employment")) 
      newSuggestions.push("/applications/work");
    if (path.includes("visit") || path.includes("tourist")) 
      newSuggestions.push("/applications/visitor");

    setSuggestions(newSuggestions);

    // Display toast notification
    toast({
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      variant: "destructive",
    });
  }, [location.pathname, toast]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
            <AlertTriangle className="h-10 w-10 text-coral" />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <p className="text-gray-500 mb-6">
            The page you were trying to access ({location.pathname}) doesn't exist or has been moved.
          </p>
        </div>

        {suggestions.length > 0 && (
          <div className="mb-6">
            <Alert className="border-ocean/20 bg-ocean/5 mb-4">
              <AlertTitle className="text-ocean">
                Did you mean to visit one of these pages?
              </AlertTitle>
              <AlertDescription>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  {suggestions.map((suggestion) => (
                    <Link
                      key={suggestion}
                      to={suggestion}
                      className="text-ocean hover:text-ocean-dark hover:underline text-left flex items-center"
                    >
                      <ArrowLeft className="h-3 w-3 mr-2" />
                      {suggestion}
                    </Link>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Button asChild className="w-full">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full">
            <a href="#" className="flex items-center justify-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              Report this issue
            </a>
          </Button>
        </div>
      </div>
      
      <div className="mt-6 flex items-center space-x-2 text-sm text-gray-500">
        <div className="size-2 rounded-full bg-green-500"></div>
        <span>All systems operational</span>
      </div>
    </div>
  );
};

export default NotFound;
