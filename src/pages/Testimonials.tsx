import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Small Business Owner",
      location: "Nairobi",
      image: "👩‍💼",
      rating: 5,
      testimonial: "TechEase Solutions saved my business! When our entire network went down during a crucial client presentation, they had us back online within 2 hours. Their team is professional, knowledgeable, and truly cares about their customers.",
      service: "Network Setup & Emergency Support",
      icon: Briefcase
    },
    {
      name: "David Mutua",
      role: "University Student",
      location: "Nairobi",
      image: "👨‍🎓",
      rating: 5,
      testimonial: "As a student, I couldn't afford expensive repairs when my laptop crashed before exams. TechEase not only fixed it quickly but also taught me how to prevent future issues. Their pricing is fair and transparent.",
      service: "Computer Repair & Data Recovery",
      icon: GraduationCap
    },
    {
      name: "Grace Wanjiku",
      role: "Freelance Designer",
      location: "Nairobi",
      image: "👩‍🎨",
      rating: 5,
      testimonial: "The website they created for my design portfolio is absolutely stunning! They understood my vision perfectly and delivered beyond my expectations. The ongoing support has been exceptional.",
      service: "Website Creation & Digital Branding",
      icon: User
    },
    {
      name: "James Ochieng",
      role: "Retiree",
      location: "Nairobi",
      image: "👨‍💼",
      rating: 5,
      testimonial: "I was completely lost with technology until I found TechEase. They patiently taught me cybersecurity basics and set up all my online accounts. They treat seniors with such respect and patience.",
      service: "Cybersecurity & Online Setup",
      icon: User
    },
    {
      name: "Mary Njeri",
      role: "Accountant",
      location: "Nairobi",
      image: "👩‍💼",
      rating: 5,
      testimonial: "When I needed to set up a home office during COVID, TechEase handled everything - from network setup to software installation. They made remote work possible for me and my team.",
      service: "Home Office Setup",
      icon: Briefcase
    },
    {
      name: "Peter Kamau",
      role: "Shop Owner",
      location: "Nairobi",
      image: "👨‍💼",
      rating: 5,
      testimonial: "Their pre-purchase inspection service saved me from buying a faulty computer. The detailed report helped me negotiate a better price and avoid costly repairs later. Honest and thorough service!",
      service: "Pre-Purchase Inspection",
      icon: User
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "98%", label: "Positive Reviews" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "24hr", label: "Response Time" }
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
                What Our <span className="text-primary">Customers Say</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Don't just take our word for it. Here's what real customers say about their 
                experience with TechEase Solutions and how we've helped solve their tech challenges.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg font-semibold">4.9/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center space-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const Icon = testimonial.icon;
                return (
                  <Card 
                    key={testimonial.name}
                    className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 space-y-4">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-primary/20" />
                      
                      {/* Testimonial Text */}
                      <p className="text-muted-foreground leading-relaxed">
                        "{testimonial.testimonial}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Service Badge */}
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                      
                      {/* Customer Info */}
                      <div className="border-t pt-4 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-lg">
                          {testimonial.image}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Icon className="w-3 h-3" />
                            <span>{testimonial.role}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Real Success Stories</h2>
                <p className="text-muted-foreground">
                  See how we've helped businesses and individuals overcome their technology challenges
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <Badge className="mb-4 bg-secondary text-secondary-foreground">
                          Business Case Study
                        </Badge>
                        <h3 className="text-xl font-bold mb-3">
                          Local Restaurant Chain Streamlines Operations
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          A growing restaurant chain was struggling with outdated POS systems and 
                          unreliable internet. We implemented a complete network overhaul and 
                          modern point-of-sale solutions.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div><strong>Challenge:</strong> Slow transactions, frequent downtime</div>
                          <div><strong>Solution:</strong> Network upgrade + POS system integration</div>
                          <div><strong>Result:</strong> 50% faster transactions, 99% uptime</div>
                        </div>
                      </div>
                      <div className="bg-gradient-primary rounded-xl p-6 text-white text-center">
                        <div className="text-3xl mb-2">🍽️</div>
                        <div className="text-2xl font-bold">50%</div>
                        <div className="text-sm">Faster Service</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="bg-gradient-secondary rounded-xl p-6 text-white text-center order-2 md:order-1">
                        <div className="text-3xl mb-2">🎓</div>
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-sm">Data Recovered</div>
                      </div>
                      <div className="order-1 md:order-2">
                        <Badge className="mb-4 bg-accent text-accent-foreground">
                          Student Success Story
                        </Badge>
                        <h3 className="text-xl font-bold mb-3">
                          Final Year Project Saved from Disaster
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          A university student's laptop crashed just days before submitting their 
                          final year project. Our emergency data recovery service saved months of work.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div><strong>Challenge:</strong> Complete system failure, project due in 3 days</div>
                          <div><strong>Solution:</strong> Emergency data recovery + new system setup</div>
                          <div><strong>Result:</strong> 100% data recovered, project submitted on time</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to Join Our Success Stories?</h2>
              <p className="text-white/90 text-lg">
                Don't let technology problems hold you back. Experience the TechEase difference 
                and join hundreds of satisfied customers who trust us with their tech needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Share Your Challenge</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">View Our Services</Link>
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

export default Testimonials;