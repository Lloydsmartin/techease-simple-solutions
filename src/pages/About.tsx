import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Zap, Shield, Award, Clock } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  About <span className="text-primary">TechEase Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're passionate about making technology work for you, not against you. 
                  Founded on the belief that tech should be simple, accessible, and stress-free.
                </p>
                <div className="flex items-center space-x-4 text-primary font-medium">
                  <Heart className="w-5 h-5" />
                  <span>"Your Tech, Our Care"</span>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <img 
                  src={aboutImage} 
                  alt="TechEase Solutions team helping customers" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To bridge the gap between complex technology and everyday users. We believe everyone 
                deserves reliable, professional IT support without the technical jargon or inflated prices. 
                Our goal is simple: make your technology work seamlessly so you can focus on what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values shape every interaction and define how we approach technology solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Customer First",
                  description: "Your success is our success. We listen, understand, and deliver solutions that truly meet your needs.",
                  color: "text-red-500",
                  bgColor: "bg-red-50"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Certified professionals with years of experience who stay updated with the latest technology trends.",
                  color: "text-primary",
                  bgColor: "bg-primary-light"
                },
                {
                  icon: Zap,
                  title: "Quick Response",
                  description: "Fast, efficient service because we know technology problems can't wait. Same-day support when you need it.",
                  color: "text-yellow-500",
                  bgColor: "bg-yellow-50"
                },
                {
                  icon: Shield,
                  title: "Secure Solutions",
                  description: "Your data safety is paramount. We implement robust security measures in everything we do.",
                  color: "text-secondary",
                  bgColor: "bg-secondary-light"
                },
                {
                  icon: Award,
                  title: "Quality Guarantee",
                  description: "We stand behind our work with comprehensive warranties and ongoing support for peace of mind.",
                  color: "text-accent",
                  bgColor: "bg-accent-light"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Technology doesn't sleep, and neither do we. Emergency support available around the clock.",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50"
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="border-0 shadow-md hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              </div>
              
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  TechEase Solutions was born from a simple observation: technology should make life easier, 
                  not more complicated. Our founder, with years of experience in IT support, noticed that 
                  many people were struggling with technology that was supposed to help them.
                </p>
                
                <p className="mb-6">
                  Whether it was students unable to access their coursework due to computer issues, 
                  small business owners losing productivity from network problems, or individuals 
                  feeling overwhelmed by cybersecurity concerns, there was a clear need for 
                  approachable, professional IT support.
                </p>
                
                <p className="mb-8">
                  Today, we serve hundreds of satisfied clients across Kenya, from individual users 
                  to growing businesses. Our team combines technical expertise with genuine care 
                  for our customers, ensuring that every interaction leaves you feeling confident 
                  and supported in your technology journey.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="hover-glow">
                  <Link to="/contact">Start Your Tech Journey With Us</Link>
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

export default About;