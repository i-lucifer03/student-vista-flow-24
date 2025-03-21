
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VisaFlow | Education & Immigration CRM</title>
      </Helmet>
      
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-ocean to-ocean-light text-white">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:py-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <span className="text-2xl font-bold">VisaFlow</span>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
                  Solutions
                </a>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </a>
              </div>
              
              <div>
                <Link to="/login">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Streamline Your Visa Processing Workflow
                </h1>
                <p className="text-white/80 text-lg mb-8 max-w-lg">
                  VisaFlow is a comprehensive CRM designed specifically for education and immigration agencies to simplify student and client applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login">
                    <Button size="lg" className="bg-white text-ocean hover:bg-gray-100">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20">
                    Request Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 size-40 bg-emerald/20 rounded-full blur-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl animate-float">
                    <img 
                      src="https://placehold.co/600x400/2C5282/FFFFFF?text=VisaFlow+Dashboard" 
                      alt="VisaFlow Dashboard Preview"
                      className="rounded-lg shadow-lg w-full max-w-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Feature Highlights */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-ocean-light px-4 py-1.5 bg-ocean-light/10 rounded-full mb-4 inline-block">
                FEATURES
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Everything You Need to Manage Visa Applications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                VisaFlow provides a comprehensive set of tools to streamline your workflow, increase productivity, and improve client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Multi-role Authentication",
                  description: "Secure access for agents and administrators with customized permissions and views.",
                  icon: "https://placehold.co/80/48BB78/FFFFFF?text=🔒",
                  delay: "0"
                },
                {
                  title: "Lead Management",
                  description: "Track and manage visa applications across Education, Visitor, and Work categories.",
                  icon: "https://placehold.co/80/4299E1/FFFFFF?text=📊",
                  delay: "300"
                },
                {
                  title: "Dynamic Forms",
                  description: "Category-specific application forms with document upload capabilities.",
                  icon: "https://placehold.co/80/2C5282/FFFFFF?text=📝",
                  delay: "600"
                },
                {
                  title: "Document Management",
                  description: "Securely store, manage, and share client documents with drag-and-drop uploads.",
                  icon: "https://placehold.co/80/48BB78/FFFFFF?text=📁",
                  delay: "0"
                },
                {
                  title: "Country Catalog",
                  description: "Comprehensive database of country-specific visa options and requirements.",
                  icon: "https://placehold.co/80/4299E1/FFFFFF?text=🌎",
                  delay: "300"
                },
                {
                  title: "Analytics & Reporting",
                  description: "Gain insights into your agency's performance with detailed reports and dashboards.",
                  icon: "https://placehold.co/80/2C5282/FFFFFF?text=📈",
                  delay: "600"
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-low animate-fade-in"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <img src={feature.icon} alt={feature.title} className="size-16 mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-ocean to-ocean-light rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Visa Application Process?
                  </h2>
                  <p className="text-white/80 mb-0 md:mb-6 max-w-2xl">
                    Join hundreds of education and immigration agencies that have streamlined their operations with VisaFlow.
                  </p>
                  
                  <div className="hidden md:flex flex-wrap gap-6 mt-8">
                    {["Simple Onboarding", "Free Migration", "24/7 Support", "Regular Updates"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white">
                        <CheckCircle className="h-5 w-5 text-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Start Your Free Trial</h3>
                    <p className="text-gray-600 mb-6">No credit card required. 14-day free trial.</p>
                    <Link to="/login">
                      <Button className="w-full bg-ocean hover:bg-ocean-light mb-4">
                        Get Started
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-gray-500">
                      By signing up, you agree to our Terms and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-6 md:mb-0">
                <div className="size-8 rounded-md bg-ocean flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="text-xl font-bold text-gray-800">VisaFlow</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-ocean transition-colors">
                  Features
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean transition-colors">
                  Solutions
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean transition-colors">
                  Resources
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean transition-colors">
                  Contact
                </a>
              </div>
              
              <div>
                <Link to="/login">
                  <Button className="bg-ocean hover:bg-ocean-light">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2023 VisaFlow. All rights reserved.
              </p>
              
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-ocean transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-ocean transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-ocean transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
