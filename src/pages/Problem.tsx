import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, TrendingUp, Thermometer, Users, Droplets } from 'lucide-react';

export const Problem = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Rapid Urbanization",
      description: "Growing cities are placing unprecedented demand on existing water infrastructure, often outpacing supply capacity.",
      impact: "300% increase in urban water demand over the past decade"
    },
    {
      icon: Thermometer,
      title: "Climate Change Effects",
      description: "Altered precipitation patterns and extreme weather events are disrupting traditional water supply cycles.",
      impact: "40% reduction in seasonal rainfall predictability"
    },
    {
      icon: Users,
      title: "Population Growth",
      description: "Exponential population increases are straining water resources beyond sustainable levels.",
      impact: "Expected 50% population growth in the next 20 years"
    },
    {
      icon: Droplets,
      title: "Aging Infrastructure",
      description: "Deteriorating pipes, outdated storage systems, and inefficient distribution networks cause significant water loss.",
      impact: "25-30% water loss through infrastructure leakage"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-sky-light via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Water Management Crisis
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Water resource management faces unprecedented challenges as demand increases while supply becomes more unpredictable. 
            Understanding these challenges is crucial for developing effective forecasting and storage solutions.
          </p>
        </div>

        {/* Problem Overview */}
        <Card className="mb-16 border-orange-200 shadow-float">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="text-2xl text-center">Current State of Water Resources</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">2.2B</div>
                <div className="text-muted-foreground">People lack access to safely managed water</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">40%</div>
                <div className="text-muted-foreground">Of global population affected by water scarcity</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">70%</div>
                <div className="text-muted-foreground">Increase in water demand expected by 2050</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card key={index} className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:animate-wave">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {challenge.description}
                  </CardDescription>
                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <div className="text-sm font-semibold text-orange-800">Key Impact:</div>
                    <div className="text-sm text-orange-700">{challenge.impact}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why This Matters */}
        <Card className="border-ocean-light/30 shadow-water">
          <CardHeader className="bg-gradient-to-r from-ocean-light/10 to-aqua-bright/10">
            <CardTitle className="text-2xl text-center text-ocean-deep">
              Why Accurate Forecasting and Assessment Matter
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-ocean-deep">Without Proper Planning:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Emergency water shortages during peak demand periods</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Inefficient allocation of resources and budget overruns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Environmental degradation from over-extraction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Public health risks from inadequate water supply</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-water-fresh">With Data-Driven Solutions:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proactive infrastructure planning and investment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Optimized reservoir management and storage utilization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sustainable water conservation strategies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Community resilience against water-related challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};