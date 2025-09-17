import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
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
  Users,
  Heart,
  Zap,
  DollarSign,
  Award,
  Star,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Linkedin,
  Send,
  Quote,
  User,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import aboutImage from "@/assets/about-us.jpg";

const Index = () => {
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

  const services = [
    {
      icon: Monitor,
      title: "Computer Hardware Repair",
      description: "Professional diagnosis and repair of laptops, desktops, and all computer components.",
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
      pricing: "From KSh 1,000",
      timeframe: "2-4 hours",
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Globe,
      title: "Website & Portfolio Creation",
      description: "Custom websites and portfolios that showcase your business or personal brand professionally.",
      pricing: "From KSh 15,000",
      timeframe: "1-2 weeks",
      popular: true,
      color: "text-accent",
      bgColor: "bg-accent-light"
    },
    {
      icon: Shield,
      title: "Cybersecurity Basics",
      description: "Password management, antivirus setup, and data safety training for complete peace of mind.",
      pricing: "From KSh 2,000",
      timeframe: "2-3 hours",
      color: "text-orange",
      bgColor: "bg-orange-light"
    },
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description: "Protect your valuable data with reliable backup solutions and emergency recovery services.",
      pricing: "From KSh 2,500",
      timeframe: "Same day",
      color: "text-cyan",
      bgColor: "bg-cyan-light"
    },
    {
      icon: Wifi,
      title: "Network Setup & Troubleshooting",
      description: "Fast, reliable internet connections for your home or office with ongoing support.",
      pricing: "From KSh 2,000",
      timeframe: "2-4 hours",
      color: "text-primary",
      bgColor: "bg-primary-light"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Small Business Owner",
      image: "👩‍💼",
      rating: 5,
      testimonial: "TechEase Solutions saved my business! When our entire network went down during a crucial client presentation, they had us back online within 2 hours.",
      service: "Network Setup & Emergency Support",
    },
    {
      name: "David Mutua",
      role: "University Student",
      image: "👨‍🎓",
      rating: 5,
      testimonial: "As a student, I couldn't afford expensive repairs when my laptop crashed before exams. TechEase not only fixed it quickly but also taught me how to prevent future issues.",
      service: "Computer Repair & Data Recovery",
    },
    {
      name: "Grace Wanjiku",
      role: "Freelance Designer",
      image: "👩‍🎨",
      rating: 5,
      testimonial: "The website they created for my design portfolio is absolutely stunning! They understood my vision perfectly and delivered beyond my expectations.",
      service: "Website Creation & Digital Branding",
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 700 244 989",
      description: "24/7 emergency support",
      action: "tel:+254700244989",
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "Quick Support",
      description: "Instant messaging & file sharing",
      action: "https://wa.me/254700244989",
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Mail,
      title: "Email",
      details: "lloydsmusau02@gmail.com",
      description: "Detailed inquiries",
      action: "mailto:lloydsmusau02@gmail.com",
      color: "text-accent",
      bgColor: "bg-accent-light"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in text-white">
                <div className="space-y-2">
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Your Tech, Our Care
                  </Badge>
                  <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                    We Fix IT Before It <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Breaks You</span>
                  </h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  Professional IT solutions for individuals and businesses. From simple fixes to complex projects, 
                  we make technology work for you - not against you.
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-300" />
                    <span>24/7 Emergency Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-300" />
                    <span>500+ Happy Customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="secondary" size="lg" className="group">
                    <a href="#contact" className="flex items-center space-x-2">
                      <span>Book a Service Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <a href="tel:+254700244989">Call Emergency Line</a>
                  </Button>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <img 
                  src={heroImage} 
                  alt="Modern tech workspace with professional IT equipment" 
                  className="rounded-2xl shadow-rainbow hover:shadow-rainbow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section id="services" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-gradient-primary text-white">
                Our Core Services
              </Badge>
              <h2 className="text-4xl font-bold">
                Smart Solutions for <span className="text-primary">Everyday Tech Needs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From hardware repairs to cybersecurity, we offer comprehensive IT services 
                designed to keep you connected, productive, and secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className="group hover-lift border-0 shadow-lg hover:shadow-rainbow transition-all duration-500 animate-scale-in relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-gradient-rainbow text-white z-10">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-rainbow opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    <CardHeader className="space-y-4 relative z-10">
                      <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 group-hover:text-foreground transition-colors duration-300">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 relative z-10">
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Starting from</span>
                          <span className="font-bold text-primary text-lg">{service.pricing}</span>
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

            <div className="text-center">
              <Button asChild variant="rainbow" size="lg">
                <a href="#contact">Get Your Free Quote Today</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <Badge className="bg-gradient-secondary text-white">
                    About TechEase Solutions
                  </Badge>
                  <h2 className="text-4xl font-bold">
                    Making Technology <span className="text-secondary">Simple & Stress-Free</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're passionate about bridging the gap between complex technology and everyday users. 
                    Founded on the belief that tech should be accessible and stress-free for everyone.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Users, number: "500+", label: "Happy Customers", color: "text-primary" },
                    { icon: Star, number: "4.9/5", label: "Customer Rating", color: "text-secondary" },
                    { icon: Clock, number: "24/7", label: "Support Available", color: "text-accent" },
                    { icon: Award, number: "99%", label: "Success Rate", color: "text-orange" }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-gradient-subtle hover:shadow-lg transition-all duration-300">
                        <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-4 text-primary font-medium">
                  <Heart className="w-6 h-6" />
                  <span className="text-lg">"Your Tech, Our Care"</span>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <img 
                  src={aboutImage} 
                  alt="TechEase Solutions team helping customers with technology" 
                  className="rounded-2xl shadow-xl hover:shadow-rainbow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-gradient-accent text-white">
                Why Choose TechEase
              </Badge>
              <h2 className="text-4xl font-bold">
                What Makes Us <span className="text-accent">Different</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't just fix problems - we build lasting relationships through exceptional service 
                and genuine care for our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Trusted Expertise",
                  description: "Certified professionals with years of experience and proven track record.",
                  color: "text-primary",
                  bgColor: "bg-primary-light"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Service",
                  description: "Same-day service available with 2-hour average response time.",
                  color: "text-secondary",
                  bgColor: "bg-secondary-light"
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  description: "No hidden fees, upfront pricing with free consultation.",
                  color: "text-accent",
                  bgColor: "bg-accent-light"
                },
                {
                  icon: Heart,
                  title: "Customer-First Approach",
                  description: "Personalized service with satisfaction guarantee.",
                  color: "text-orange",
                  bgColor: "bg-orange-light"
                },
                {
                  icon: Award,
                  title: "Quality Guarantee",
                  description: "30-90 day warranty on repairs with ongoing support.",
                  color: "text-cyan",
                  bgColor: "bg-cyan-light"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Emergency support available around the clock.",
                  color: "text-primary",
                  bgColor: "bg-primary-light"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="group hover-lift border-0 shadow-lg hover:shadow-rainbow transition-all duration-500 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-gradient-rainbow text-white">
                Customer Success Stories
              </Badge>
              <h2 className="text-4xl font-bold">
                What Our <span className="text-primary">Customers Say</span>
              </h2>
              <div className="flex justify-center items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-lg font-semibold">4.9/5 Customer Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="group hover-lift border-0 shadow-lg hover:shadow-rainbow transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                    
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                    
                    <div className="border-t pt-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4 text-white">
              <Badge className="bg-white/20 text-white border-white/30">
                Get Expert Help Today
              </Badge>
              <h2 className="text-4xl font-bold">
                Ready to <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Solve Your Tech Challenges?</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Don't let technology problems hold you back. Get professional IT support that's fast, 
                reliable, and genuinely caring.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={method.title}
                    className="group hover-lift border-0 shadow-lg hover:shadow-rainbow transition-all duration-500 bg-white/10 backdrop-blur-md text-white"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-4 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${method.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className={`w-8 h-8 ${method.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                        <p className="text-white/80">{method.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="font-medium text-white">{method.details}</p>
                      <Button asChild variant="secondary" className="w-full">
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

            {/* Contact Form */}
            <Card className="max-w-2xl mx-auto border-0 shadow-rainbow bg-white/95 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Tell us about your tech challenge and we'll get back to you within 2 hours.
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
                        className="focus:ring-2 focus:ring-primary"
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
                        className="focus:ring-2 focus:ring-primary"
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
                      className="focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Computer Hardware Repair",
                            "Software Repair & Installation",
                            "Website & Portfolio Creation",
                            "Cybersecurity Basics",
                            "Data Backup & Recovery",
                            "Network Setup & Troubleshooting",
                            "Emergency IT Support",
                            "Other"
                          ].map((service) => (
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
                        <SelectTrigger className="focus:ring-2 focus:ring-primary">
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
                      rows={4}
                      required
                      className="focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" variant="rainbow" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;