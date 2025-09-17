import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Palette,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Computer Hardware Repair",
    description: "Professional diagnosis and repair of laptops, desktops, and all computer components.",
    features: ["Hardware diagnostics", "Component replacement", "Performance upgrades", "Warranty on repairs"],
    pricing: "From KSh 1,500",
    timeframe: "Same day service",
    popular: true,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Settings,
    title: "Software Repair & Installation",
    description: "Operating system fixes, software installation, and performance optimization.",
    features: ["OS troubleshooting", "Software installation", "Performance optimization", "Driver updates"],
    pricing: "From KSh 1,000",
    timeframe: "2-4 hours",
    popular: false,
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Search,
    title: "Pre-Purchase Tech Inspection",
    description: "Professional evaluation of devices before purchase to ensure you get the best value.",
    features: ["Comprehensive testing", "Performance assessment", "Value analysis", "Buying recommendations"],
    pricing: "KSh 800 per device",
    timeframe: "1 hour",
    popular: false,
    color: "text-accent",
    bgColor: "bg-accent-light"
  },
  {
    icon: Globe,
    title: "Website & Portfolio Creation",
    description: "Custom websites and portfolios that showcase your business or personal brand professionally.",
    features: ["Custom design", "Mobile responsive", "SEO optimization", "Content management"],
    pricing: "From KSh 15,000",
    timeframe: "1-2 weeks",
    popular: true,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Smartphone,
    title: "Online Applications Setup",
    description: "Email, cloud storage, productivity apps - we'll get you connected and productive.",
    features: ["Email configuration", "Cloud setup", "App installation", "Account synchronization"],
    pricing: "From KSh 800",
    timeframe: "1-2 hours",
    popular: false,
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Shield,
    title: "Cybersecurity Basics",
    description: "Password management, antivirus setup, and data safety training for complete peace of mind.",
    features: ["Antivirus installation", "Password managers", "Security training", "Threat assessment"],
    pricing: "From KSh 2,000",
    timeframe: "2-3 hours",
    popular: true,
    color: "text-accent",
    bgColor: "bg-accent-light"
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Protect your valuable data with reliable backup solutions and emergency recovery services.",
    features: ["Backup setup", "Data recovery", "Cloud storage", "Emergency response"],
    pricing: "From KSh 2,500",
    timeframe: "Same day",
    popular: false,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    icon: Wifi,
    title: "Network Setup & Troubleshooting",
    description: "Fast, reliable internet connections for your home or office with ongoing support.",
    features: ["Network installation", "WiFi optimization", "Troubleshooting", "Security configuration"],
    pricing: "From KSh 2,000",
    timeframe: "2-4 hours",
    popular: false,
    color: "text-secondary",
    bgColor: "bg-secondary-light"
  },
  {
    icon: Palette,
    title: "Digital Branding Support",
    description: "Logo design, brand guidelines, and digital presence to make your business stand out.",
    features: ["Logo design", "Brand guidelines", "Social media setup", "Marketing materials"],
    pricing: "From KSh 8,000",
    timeframe: "3-5 days",
    popular: false,
    color: "text-accent",
    bgColor: "bg-accent-light"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Professional <span className="text-primary">IT Services</span> for Everyone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From simple fixes to complex projects, our comprehensive services ensure your technology 
                works perfectly. Fast, reliable, and affordable solutions for individuals and businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span>Warranty on all repairs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>500+ satisfied customers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardHeader className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Starting from</span>
                          <span className="font-semibold text-primary">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Typical time</span>
                          <span className="font-medium">{service.timeframe}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold">Emergency IT Support</h2>
                <p className="text-white/90">
                  Critical system down? Data emergency? We provide 24/7 emergency support 
                  for urgent IT issues that can't wait.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="secondary" size="lg">
                    <a href="tel:+254700244989">Call Emergency Line</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <a href="https://wa.me/254700244989" target="_blank" rel="noopener noreferrer">
                      WhatsApp Support
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Don't let tech problems slow you down. Get expert help today with our 
                fast, reliable, and affordable IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="hover-glow">
                  <Link to="/contact">Book a Service</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;