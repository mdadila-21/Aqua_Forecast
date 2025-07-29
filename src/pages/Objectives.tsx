import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart3, Eye, TrendingUp, MapPin, Users, Target } from 'lucide-react';

export const Objectives = () => {
  const objectives = [
    {
      icon: BarChart3,
      title: "Analyze Historical Water Data",
      description: "Comprehensive analysis of water usage patterns, rainfall data, and reservoir inflow/outflow records to identify trends and seasonal variations.",
      deliverables: [
        "10-year water usage trend analysis",
        "Seasonal rainfall pattern mapping",
        "Reservoir capacity utilization reports"
      ]
    },
    {
      icon: TrendingUp,
      title: "Forecast Future Water Demand",
      description: "Utilize demographic data, population growth projections, and climate change models to predict future water requirements accurately.",
      deliverables: [
        "20-year demand projection models",
        "Population growth impact analysis",
        "Climate-adjusted demand scenarios"
      ]
    },
    {
      icon: Eye,
      title: "Evaluate Current Storage Capacities",
      description: "Assess existing reservoir infrastructure, storage efficiency, and capacity to meet projected future demands.",
      deliverables: [
        "Reservoir capacity assessment reports",
        "Infrastructure efficiency analysis",
        "Gap analysis documentation"
      ]
    },
    {
      icon: MapPin,
      title: "Develop Interactive Visualization Tools",
      description: "Create user-friendly dashboards and mapping tools to present complex data in accessible formats for stakeholders.",
      deliverables: [
        "Interactive water demand dashboard",
        "Reservoir status mapping system",
        "Real-time monitoring interface"
      ]
    },
    {
      icon: Users,
      title: "Provide Community-Level Recommendations",
      description: "Generate actionable insights and conservation strategies tailored to local community needs and resources.",
      deliverables: [
        "Community conservation guidelines",
        "Resource optimization strategies",
        "Implementation roadmaps"
      ]
    }
  ];

  const outcomes = [
    {
      title: "Enhanced Water Security",
      description: "Communities will have better understanding of their water resources and future needs"
    },
    {
      title: "Informed Decision Making",
      description: "Data-driven insights for infrastructure planning and resource allocation"
    },
    {
      title: "Sustainable Resource Management",
      description: "Long-term strategies for efficient water use and conservation"
    },
    {
      title: "Risk Mitigation",
      description: "Early warning systems for potential water shortages or oversupply scenarios"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-sky-light via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-ocean-deep to-aqua-bright rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project Objectives
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach to water forecasting and reservoir assessment focuses on five key objectives 
            that will drive sustainable water resource management for communities.
          </p>
        </div>

        {/* Main Objectives */}
        <div className="space-y-8 mb-16">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <Card key={index} className="group hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-ocean-deep to-ocean-medium rounded-lg group-hover:animate-wave">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-gradient-to-r from-ocean-deep to-aqua-bright bg-clip-text text-transparent font-bold text-lg">
                          #{index + 1}
                        </span>
                        <CardTitle className="text-xl md:text-2xl">{objective.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {objective.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <h4 className="font-semibold text-ocean-deep mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {objective.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-water-fresh flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expected Outcomes */}
        <Card className="border-water-fresh/30 shadow-water">
          <CardHeader className="bg-gradient-to-r from-water-fresh/10 to-secondary-light/10">
            <CardTitle className="text-2xl text-center text-water-fresh">
              Expected Project Outcomes
            </CardTitle>
            <CardDescription className="text-center text-lg">
              The tangible benefits our community will achieve through this comprehensive water management initiative
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-water-fresh/5 hover:bg-water-fresh/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-water-fresh to-secondary-light rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-water-fresh mb-2">{outcome.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Overview */}
        <Card className="mt-16 border-ocean-light/30 shadow-water">
          <CardHeader className="bg-gradient-to-r from-ocean-light/10 to-aqua-bright/10">
            <CardTitle className="text-2xl text-center text-ocean-deep">
              Project Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-deep to-ocean-medium rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold">Data Collection</h4>
                <p className="text-sm text-muted-foreground">Months 1-3</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-medium to-aqua-bright rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold">Analysis & Modeling</h4>
                <p className="text-sm text-muted-foreground">Months 4-8</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-aqua-bright to-water-fresh rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold">Visualization Development</h4>
                <p className="text-sm text-muted-foreground">Months 9-11</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-water-fresh to-secondary-light rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold">Implementation & Recommendations</h4>
                <p className="text-sm text-muted-foreground">Months 12-15</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};