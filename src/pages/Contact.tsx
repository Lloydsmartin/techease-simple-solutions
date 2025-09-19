import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Linkedin,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 hours. For urgent issues, please call us directly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      urgency: "",
      message: ""
    });
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 100 944 938",
      description: "Available 24/7 for emergencies",
      action: "tel:+254100944938",
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+254 100 944 938",
      description: "Quick support & file sharing",
      action: "https://wa.me/254100944938",
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Mail,
      title: "Email",
      details: "lloydsmusau02@gmail.com",
      description: "Detailed inquiries & documentation",
      action: "mailto:lloydsmusau02@gmail.com",
      color: "text-accent",
      bgColor: "bg-accent-light"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "Professional Network",
      description: "Connect & follow our updates",
      action: "https://www.linkedin.com/in/lloydsmusau/",
      color: "text-primary",
      bgColor: "bg-primary-light"
    }
  ];

  const services = [
    "Computer Hardware Repair",
    "Software Repair & Installation",
    "Pre-Purchase Tech Inspection",
    "Website & Portfolio Creation",
    "Online Applications Setup",
    "Cybersecurity Basics",
    "Data Backup & Recovery",
    "Network Setup & Troubleshooting",
    "Digital Branding Support",
    "Emergency IT Support",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Get <span className="text-primary">Expert Help</span> Today
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to solve your tech challenges? Reach out to us and get professional 
                IT support that's fast, reliable, and genuinely caring.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>2-hour response time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>24/7 emergency support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Preferred Contact Method</h2>
              <p className="text-muted-foreground">
                Multiple ways to reach us - pick what works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={method.title}
                    className="group hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-4 text-center">
                      <div className={`w-12 h-12 rounded-xl ${method.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="font-medium">{method.details}</p>
                      <Button asChild className="w-full">
                        <a 
                          href={method.action} 
                          target={method.action.startsWith('http') ? '_blank' : undefined}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          Contact Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <Send className="w-6 h-6 text-primary" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Tell us about your tech challenge and we'll get back to you with a solution.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed</Label>
                          <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="How urgent?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - Can wait a few days</SelectItem>
                              <SelectItem value="medium">Medium - Need help soon</SelectItem>
                              <SelectItem value="high">High - Need help today</SelectItem>
                              <SelectItem value="emergency">Emergency - Urgent!</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Describe Your Issue *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your tech challenge, what's not working, or what you need help with..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full hover-glow">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Response Times</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span>General Inquiries</span>
                        <span className="font-medium">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service Requests</span>
                        <span className="font-medium">Same day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Support</span>
                        <span className="font-medium text-red-500">Immediate</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span>Service Areas</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        We provide services across Nairobi and surrounding areas:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• On-site visits within Nairobi</li>
                        <li>• Remote support available nationwide</li>
                        <li>• Emergency support 24/7</li>
                        <li>• Pick-up and delivery service</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-hero text-white border-0">
                    <CardContent className="p-6 text-center space-y-4">
                      <h3 className="text-xl font-bold">Emergency Support</h3>
                      <p className="text-white/90">
                        Critical system down? Can't wait for regular support? 
                        Call our emergency line for immediate assistance.
                      </p>
                      <Button asChild variant="secondary">
                        <a href="tel:+254100944938">Call Emergency Line</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;