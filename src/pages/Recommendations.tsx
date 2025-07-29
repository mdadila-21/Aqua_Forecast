import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Factory, Home, Leaf, Shield, TrendingDown, CheckCircle } from 'lucide-react';

export const Recommendations = () => {
  const communityStrategies = [
    {
      icon: Home,
      category: "Household Level",
      title: "Smart Water Usage at Home",
      priority: "High",
      strategies: [
        "Install low-flow faucets and showerheads to reduce consumption by 30%",
        "Fix leaks immediately - a dripping tap can waste 15L per day",
        "Use drought-resistant native plants in gardens",
        "Collect rainwater for outdoor use with simple barrel systems",
        "Run dishwashers and washing machines only with full loads"
      ],
      impact: "20-30% reduction in household water use",
      implementation: "Individual homeowners",
      timeframe: "1-3 months"
    },
    {
      icon: Users,
      category: "Community Level",
      title: "Neighborhood Conservation Programs",
      priority: "High",
      strategies: [
        "Establish community gardens with shared irrigation systems",
        "Organize neighborhood leak detection and repair workshops",
        "Create water-sharing networks for emergency situations",
        "Implement greywater recycling for common area irrigation",
        "Start education campaigns about seasonal water conservation"
      ],
      impact: "15-25% reduction in community water demand",
      implementation: "Local community groups",
      timeframe: "6-12 months"
    },
    {
      icon: Factory,
      category: "Infrastructure",
      title: "Smart Water Management Systems",
      priority: "Medium",
      strategies: [
        "Install smart meters for real-time usage monitoring",
        "Upgrade aging pipes to reduce system-wide leakage",
        "Implement tiered pricing to encourage conservation",
        "Deploy IoT sensors for early leak detection",
        "Build decentralized storage systems in each district"
      ],
      impact: "25-40% improvement in distribution efficiency",
      implementation: "Local government and utilities",
      timeframe: "1-3 years"
    },
    {
      icon: Leaf,
      category: "Environmental",
      title: "Natural Water Conservation",
      priority: "Medium",
      strategies: [
        "Restore wetlands and natural water retention areas",
        "Plant trees and vegetation to reduce evaporation",
        "Create permeable surfaces to improve groundwater recharge",
        "Establish buffer zones around water sources",
        "Implement sustainable agriculture practices"
      ],
      impact: "10-20% improvement in natural water retention",
      implementation: "Environmental agencies and communities",
      timeframe: "2-5 years"
    }
  ];

  const urgentActions = [
    {
      title: "Immediate Water Audit",
      description: "Conduct comprehensive assessment of current usage patterns",
      deadline: "Next 30 days",
      responsible: "Water management team"
    },
    {
      title: "Emergency Conservation Plan",
      description: "Develop protocols for drought conditions and water shortages",
      deadline: "Next 60 days",
      responsible: "Emergency management"
    },
    {
      title: "Public Awareness Campaign",
      description: "Launch community education about water conservation benefits",
      deadline: "Next 90 days",
      responsible: "Community outreach team"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-sky-light via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-water-fresh to-secondary-light rounded-full mb-6">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Recommendations
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Practical strategies for conserving water and optimizing resource efficiency at every level of our community
          </p>
        </div>

        {/* Urgent Actions */}
        <Card className="mb-16 border-orange-200 shadow-float">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="flex items-center space-x-2 text-orange-800">
              <Shield className="w-5 h-5" />
              <span>Immediate Action Items</span>
            </CardTitle>
            <CardDescription>
              Critical steps that need to be implemented within the next 90 days
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {urgentActions.map((action, index) => (
                <div key={index} className="p-4 border border-orange-200 rounded-lg bg-orange-50/50">
                  <h4 className="font-semibold text-orange-800 mb-2">{action.title}</h4>
                  <p className="text-sm text-orange-700 mb-3">{action.description}</p>
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-orange-600">Deadline: {action.deadline}</div>
                    <div className="text-xs text-orange-600">Responsible: {action.responsible}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Strategies */}
        <div className="space-y-8">
          {communityStrategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <Card key={index} className="group hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-water-fresh to-secondary-light rounded-lg group-hover:animate-wave">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-xs">{strategy.category}</Badge>
                          <Badge className={getPriorityColor(strategy.priority)}>{strategy.priority} Priority</Badge>
                        </div>
                        <CardTitle className="text-xl md:text-2xl mb-2">{strategy.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-water-fresh mb-3">Recommended Strategies:</h4>
                      <ul className="space-y-2">
                        {strategy.strategies.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-water-fresh flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-ocean-deep">Expected Impact</div>
                        <div className="text-sm text-muted-foreground">{strategy.impact}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-ocean-deep">Implementation</div>
                        <div className="text-sm text-muted-foreground">{strategy.implementation}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-ocean-deep">Timeframe</div>
                        <div className="text-sm text-muted-foreground">{strategy.timeframe}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Implementation Roadmap */}
        <Card className="mt-16 border-ocean-light/30 shadow-water">
          <CardHeader className="bg-gradient-to-r from-ocean-light/10 to-aqua-bright/10">
            <CardTitle className="text-2xl text-center text-ocean-deep">
              Implementation Roadmap
            </CardTitle>
            <CardDescription className="text-center">
              Step-by-step guide to implementing water conservation strategies in your community
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { phase: "Assessment", duration: "Month 1", focus: "Audit current usage and identify opportunities" },
                  { phase: "Planning", duration: "Month 2-3", focus: "Develop detailed implementation plans and budgets" },
                  { phase: "Implementation", duration: "Month 4-12", focus: "Roll out conservation measures across the community" },
                  { phase: "Monitoring", duration: "Ongoing", focus: "Track progress and adjust strategies as needed" }
                ].map((phase, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-deep to-aqua-bright rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-ocean-deep">{phase.phase}</h4>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{phase.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get Started */}
        <div className="mt-16 text-center">
          <Card className="border-water-fresh/30 shadow-water max-w-2xl mx-auto">
            <CardContent className="p-8">
              <TrendingDown className="w-12 h-12 text-water-fresh mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-water-fresh mb-4">Start Conserving Today</h3>
              <p className="text-muted-foreground mb-6">
                Every drop counts. Begin with simple household changes and gradually expand to community-wide initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="water" size="lg">
                  Download Action Guide
                </Button>
                <Button variant="outline" size="lg">
                  Join Community Program
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};