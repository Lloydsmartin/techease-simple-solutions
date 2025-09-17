import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Settings, 
  Search, 
  Globe, 
  Smartphone, 
  Shield, 
  Database, 
  Wifi, 
  Palette 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer Hardware Repair",
    description: "Expert diagnosis and repair of laptops, desktops, and components with quick turnaround.",
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Settings,
    title: "Software Repair & Installation",
    description: "Operating system fixes, software installation, and performance optimization.",
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Search,
    title: "Pre-Purchase Tech Inspection",
    description: "Professional evaluation of devices before you buy to ensure you get the best value.",
    color: "text-accent",
    bgColor: "bg-accent-light"
  },
  {
    icon: Globe,
    title: "Website & Portfolio Creation",
    description: "Custom websites and portfolios that showcase your business professionally.",
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Smartphone,
    title: "Online Applications Setup",
    description: "Email, cloud storage, productivity apps - we'll get you connected and productive.",
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Shield,
    title: "Cybersecurity Basics",
    description: "Password management, antivirus setup, and data safety training for peace of mind.",
    color: "text-accent",
    bgColor: "bg-accent-light"
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Protect your valuable data with reliable backup solutions and emergency recovery.",
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Wifi,
    title: "Network Setup & Troubleshooting",
    description: "Fast, reliable internet connections for your home or office with ongoing support.",
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Palette,
    title: "Digital Branding Support",
    description: "Logo design, brand guidelines, and digital presence to make your business stand out.",
    color: "text-accent",
    bgColor: "bg-accent-light"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Smart Solutions for <span className="text-primary">Every Tech Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple fixes to complex projects, we make technology work for you. 
            Our comprehensive services cover everything you need to stay connected and productive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Make Your Tech Work Better?
              </h3>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Get expert help today. No tech headaches, just solutions that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/services">View All Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;