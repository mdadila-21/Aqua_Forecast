import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Droplets, BarChart3, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/water-hero.jpg';

export const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "Advanced algorithms predict future water requirements based on historical data and trends"
    },
    {
      icon: BarChart3,
      title: "Capacity Assessment",
      description: "Real-time evaluation of reservoir storage capacities and utilization rates"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Early warning systems for potential water shortages and overflow scenarios"
    },
    {
      icon: Droplets,
      title: "Conservation Strategies",
      description: "Data-driven recommendations for efficient water resource management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-ocean-medium/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Forecasting Future Water
              <span className="block bg-gradient-to-r from-aqua-bright to-water-light bg-clip-text text-transparent">
                Requirements
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Assessing Storage Capacities in Reservoirs Through Data-Driven Analysis and Predictive Modeling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/problem">
                <Button variant="aqua" size="lg" className="text-lg px-8 py-4">
                  Explore the Problem
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/data">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Data Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
            <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach to Water Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining advanced analytics with environmental science to create sustainable water resource solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-ocean-light/50">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-ocean-light to-aqua-bright rounded-full w-fit group-hover:animate-wave">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-deep to-water-fresh">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Our Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our data-driven approach can help communities prepare for future water challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/objectives">
              <Button variant="aqua" size="lg" className="text-lg px-8 py-4">
                View Project Objectives
              </Button>
            </Link>
            <Link to="/recommendations">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                See Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};