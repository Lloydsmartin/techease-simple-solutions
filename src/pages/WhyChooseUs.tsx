import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  Zap, 
  Heart,
  CheckCircle,
  Star,
  Phone
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Certified professionals with years of experience in IT support and solutions.",
      details: [
        "Industry-certified technicians",
        "Continuous training on latest technologies",
        "Proven track record with 500+ clients",
        "Comprehensive insurance coverage"
      ],
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: Clock,
      title: "Lightning Fast Service",
      description: "Quick response times and efficient solutions that get you back up and running.",
      details: [
        "Same-day service available",
        "24/7 emergency support",
        "Average 2-hour response time",
        "On-site service within 4 hours"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, competitive pricing you can understand.",
      details: [
        "Free initial consultation",
        "Upfront pricing estimates",
        "No hidden charges",
        "Payment plans available"
      ],
      color: "text-accent",
      bgColor: "bg-accent-light"
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "Your satisfaction is our priority. We listen, understand, and deliver.",
      details: [
        "Personalized service approach",
        "Regular follow-up support",
        "Customer satisfaction guarantee",
        "Friendly, patient technicians"
      ],
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and ongoing support.",
      details: [
        "30-90 day warranty on repairs",
        "Quality parts and components",
        "Free follow-up support",
        "Satisfaction guarantee"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Solutions",
      description: "Modern problems require modern solutions. We stay ahead of technology trends.",
      details: [
        "Latest diagnostic tools",
        "Modern repair techniques",
        "Cloud-based solutions",
        "Future-proof recommendations"
      ],
      color: "text-accent",
      bgColor: "bg-accent-light"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "99%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "2hr", label: "Avg Response Time", icon: Zap }
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
                Why Choose <span className="text-primary">TechEase Solutions</span>?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                When your technology matters, you need a partner you can trust. Here's what sets us 
                apart from other IT service providers and why hundreds of customers choose us.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                <Heart className="w-5 h-5" />
                <span>"Your Tech, Our Care"</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="text-center space-y-2 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We don't just fix problems - we build lasting relationships through exceptional service 
                and genuine care for our customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
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
                    
                    <CardContent>
                      <div className="space-y-2">
                        {feature.details.map((detail) => (
                          <div key={detail} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">TechEase vs Others</h2>
                <p className="text-muted-foreground">
                  See how we compare to typical IT service providers
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Others */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">Other IT Services</h3>
                  <div className="space-y-3">
                    {[
                      "Technical jargon and confusing explanations",
                      "Hidden fees and surprise charges",
                      "Slow response times",
                      "One-size-fits-all solutions",
                      "Limited follow-up support",
                      "Impersonal service"
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TechEase */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">TechEase Solutions</h3>
                  <div className="space-y-3">
                    {[
                      "Clear, simple explanations anyone can understand",
                      "Transparent pricing with no hidden costs",
                      "Same-day service and 24/7 emergency support",
                      "Personalized solutions for your specific needs",
                      "Ongoing support and regular check-ins",
                      "Friendly, patient, and caring approach"
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Experience the TechEase Difference</h2>
              <p className="text-white/90 text-lg">
                Join hundreds of satisfied customers who trust us with their technology needs. 
                Get expert help that's fast, affordable, and genuinely caring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+254700244989" className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now: +254700244989</span>
                  </a>
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

export default WhyChooseUs;
