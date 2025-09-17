import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-accent" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Customer First</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">We Fix</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient">
                  IT
                </span>{" "}
                <span className="text-foreground">Before It</span>{" "}
                <span className="text-destructive">Breaks You</span>
              </h1>
              
              <div className="text-xl text-primary font-semibold">
                "Your Tech, Our Care"
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Professional IT solutions that make technology simple and stress-free. 
                From computer repairs to cybersecurity, we've got your tech needs covered 
                with expert care and lightning-fast service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group hover-glow">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Book a Service Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="tel:+254700244989">Call +254700244989</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24hr</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 w-32 h-20 bg-primary-light rounded-xl p-4 glass animate-scale-in">
                <div className="text-sm font-medium text-primary">Computer Repair</div>
                <div className="text-xs text-muted-foreground">Hardware & Software</div>
              </div>
              
              <div className="absolute -top-8 -right-8 w-36 h-24 bg-secondary-light rounded-xl p-4 glass animate-scale-in delay-200">
                <div className="text-sm font-medium text-secondary">Cybersecurity</div>
                <div className="text-xs text-muted-foreground">Protect Your Data</div>
              </div>
              
              <div className="absolute -bottom-4 left-8 w-40 h-20 bg-accent-light rounded-xl p-4 glass animate-scale-in delay-300">
                <div className="text-sm font-medium text-accent">Network Setup</div>
                <div className="text-xs text-muted-foreground">Fast & Reliable</div>
              </div>

              {/* Main Visual */}
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-hero rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Smart Solutions</h3>
                  <p className="text-white/80 text-sm">for Everyday Tech Needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted to-transparent" />
    </section>
  );
};

export default HeroSection;