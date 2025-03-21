
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate the user
    console.log("Login attempt with:", { email, password });
    // Redirect to dashboard for demo purposes
    window.location.href = "/dashboard";
  };

  return (
    <>
      <Helmet>
        <title>Login | VisaFlow CRM</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 animate-fade-in">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-10 rounded-md bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold text-ocean">VisaFlow</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-500 mb-8">Please enter your credentials to sign in</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean/30 transition-all"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a href="#" className="text-sm text-ocean hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean/30 transition-all"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-ocean to-ocean-light text-lg py-6"
              >
                Sign In
              </Button>
            </form>
            
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-ocean font-medium hover:underline">
                Request Access
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right side - Banner */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-ocean to-ocean-light items-center justify-center p-8">
          <div className="max-w-md text-white">
            <h2 className="text-3xl font-bold mb-4">
              Streamline Your Visa Application Process
            </h2>
            <p className="text-white/80 mb-8">
              Manage all your immigration and education applications in one place with VisaFlow - the CRM designed specifically for education and immigration agencies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-medium mb-2">Lead Management</h3>
                <p className="text-white/70 text-sm">Track and manage all client inquiries in one streamlined workflow</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-medium mb-2">Visa Categories</h3>
                <p className="text-white/70 text-sm">Education, Work, and Visitor visa applications all managed seamlessly</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-medium mb-2">Document Management</h3>
                <p className="text-white/70 text-sm">Securely store and manage all client documentation</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-medium mb-2">Status Tracking</h3>
                <p className="text-white/70 text-sm">Real-time updates on application progress and status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
