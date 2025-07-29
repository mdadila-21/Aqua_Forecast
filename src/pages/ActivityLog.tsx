import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, CheckCircle2, Clock, FileText, Users, BarChart3, Target } from 'lucide-react';

export const ActivityLog = () => {
  const [selectedWeek, setSelectedWeek] = useState('week1');

  const weeklyActivities = {
    week1: {
      title: "Week 1: Project Initiation & Data Collection Setup",
      date: "January 1-7, 2024",
      status: "Completed",
      objectives: [
        "Establish project framework and methodology",
        "Identify key data sources and stakeholders",
        "Set up data collection protocols"
      ],
      activities: [
        {
          day: "Monday",
          tasks: [
            "Project kickoff meeting with stakeholders",
            "Defined project scope and deliverables",
            "Created data collection timeline"
          ],
          dataCollected: "Initial stakeholder requirements and constraints",
          analysis: "Established baseline understanding of community water needs"
        },
        {
          day: "Tuesday",
          tasks: [
            "Contacted local water authorities for historical data",
            "Researched available climate and demographic datasets",
            "Set up data management infrastructure"
          ],
          dataCollected: "Contact information for data providers, initial dataset inventory",
          analysis: "Identified 5 key data sources for comprehensive analysis"
        },
        {
          day: "Wednesday",
          tasks: [
            "Site visits to major reservoir locations",
            "Documented current infrastructure capacity",
            "Photographed and measured facility conditions"
          ],
          dataCollected: "Reservoir capacity data, infrastructure condition assessments",
          analysis: "Current total storage capacity: 1,600 ML across 4 facilities"
        },
        {
          day: "Thursday",
          tasks: [
            "Met with community representatives",
            "Conducted preliminary usage pattern interviews",
            "Reviewed local conservation initiatives"
          ],
          dataCollected: "Community usage patterns, existing conservation measures",
          analysis: "High water usage during summer months, limited conservation awareness"
        },
        {
          day: "Friday",
          tasks: [
            "Compiled week's findings into initial report",
            "Validated data collection methodology",
            "Planned next week's activities"
          ],
          dataCollected: "Consolidated project framework and methodology documentation",
          analysis: "Successfully established comprehensive data collection framework"
        }
      ]
    },
    week2: {
      title: "Week 2: Historical Data Analysis",
      date: "January 8-14, 2024",
      status: "Completed",
      objectives: [
        "Collect and organize 10-year historical water usage data",
        "Analyze seasonal patterns and trends",
        "Identify data gaps and quality issues"
      ],
      activities: [
        {
          day: "Monday",
          tasks: [
            "Received historical consumption data from water authority",
            "Cleaned and standardized data formats",
            "Identified data quality issues and missing periods"
          ],
          dataCollected: "10 years of monthly consumption data (2014-2023)",
          analysis: "Average annual consumption: 1,320 ML with 15% year-over-year growth"
        },
        {
          day: "Tuesday",
          tasks: [
            "Analyzed seasonal consumption patterns",
            "Compared usage across different district zones",
            "Correlated consumption with weather data"
          ],
          dataCollected: "Weather correlation data, district-level usage breakdowns",
          analysis: "Summer consumption 40% higher than winter; strong correlation with temperature"
        },
        {
          day: "Wednesday",
          tasks: [
            "Reviewed reservoir inflow and outflow records",
            "Calculated storage efficiency metrics",
            "Identified peak demand periods"
          ],
          dataCollected: "Reservoir operation logs, efficiency calculations",
          analysis: "Average storage efficiency: 78%; peak demand occurs June-August"
        },
        {
          day: "Thursday",
          tasks: [
            "Conducted statistical analysis of consumption trends",
            "Developed preliminary forecasting models",
            "Validated model accuracy against historical data"
          ],
          dataCollected: "Statistical trend analysis, preliminary forecast models",
          analysis: "Linear growth model shows 94% accuracy for historical prediction"
        },
        {
          day: "Friday",
          tasks: [
            "Prepared comprehensive data analysis report",
            "Created visualization dashboards",
            "Presented findings to project team"
          ],
          dataCollected: "Comprehensive historical analysis report and dashboards",
          analysis: "Historical trends indicate accelerating demand growth requiring capacity expansion"
        }
      ]
    },
    week3: {
      title: "Week 3: Demand Forecasting Model Development",
      date: "January 15-21, 2024",
      status: "In Progress",
      objectives: [
        "Develop sophisticated demand forecasting algorithms",
        "Incorporate demographic and climate projections",
        "Validate model accuracy and reliability"
      ],
      activities: [
        {
          day: "Monday",
          tasks: [
            "Gathered population growth projections from census data",
            "Analyzed urbanization impact on water demand",
            "Researched climate change projections for the region"
          ],
          dataCollected: "Population projections through 2040, urbanization rates",
          analysis: "Expected 35% population growth by 2035 with accelerating urbanization"
        },
        {
          day: "Tuesday",
          tasks: [
            "Developed multi-variable forecasting algorithms",
            "Incorporated economic growth factors",
            "Tested different modeling approaches"
          ],
          dataCollected: "Economic indicators, multiple forecasting model outputs",
          analysis: "Combined model approach provides 89% accuracy improvement over linear models"
        },
        {
          day: "Wednesday",
          tasks: [
            "Refined climate impact parameters",
            "Incorporated extreme weather scenarios",
            "Developed drought and flood impact models"
          ],
          dataCollected: "Climate scenario data, extreme weather impact assessments",
          analysis: "Climate variability could increase demand volatility by 25%"
        },
        {
          day: "Thursday",
          tasks: [
            "Cross-validated models with neighboring region data",
            "Adjusted for local factors and conditions",
            "Performed sensitivity analysis"
          ],
          dataCollected: "Regional comparison data, sensitivity analysis results",
          analysis: "Local model adjustments improve accuracy by 12% compared to regional averages"
        },
        {
          day: "Friday",
          tasks: [
            "Finalized forecasting model parameters",
            "Generated 20-year demand projections",
            "Documented model methodology and assumptions"
          ],
          dataCollected: "Final demand forecasts through 2044, methodology documentation",
          analysis: "Projected demand will exceed current capacity by 2026 without expansion"
        }
      ]
    }
  };

  const weeks = Object.keys(weeklyActivities);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentWeek = weeklyActivities[selectedWeek as keyof typeof weeklyActivities];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-sky-light via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-ocean-deep to-aqua-bright rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Weekly Activity Log
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Detailed documentation of weekly progress, data collection activities, and analysis results throughout the project timeline
          </p>
        </div>

        {/* Week Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {weeks.map((week) => {
            const weekData = weeklyActivities[week as keyof typeof weeklyActivities];
            return (
              <Button
                key={week}
                variant={selectedWeek === week ? "ocean" : "outline"}
                onClick={() => setSelectedWeek(week)}
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Week {week.slice(-1)}</span>
              </Button>
            );
          })}
        </div>

        {/* Selected Week Overview */}
        <Card className="mb-8 shadow-water">
          <CardHeader className="bg-gradient-to-r from-ocean-light/10 to-aqua-bright/10">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-ocean-deep mb-2">{currentWeek.title}</CardTitle>
                <CardDescription className="text-lg">{currentWeek.date}</CardDescription>
              </div>
              <Badge className={getStatusColor(currentWeek.status)}>{currentWeek.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div>
              <h4 className="font-semibold text-ocean-deep mb-3 flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Week Objectives</span>
              </h4>
              <ul className="space-y-2">
                {currentWeek.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-water-fresh flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Daily Activities */}
        <div className="space-y-6">
          {currentWeek.activities.map((day, index) => (
            <Card key={index} className="group hover:shadow-float transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-ocean-deep to-aqua-bright rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span>{day.day}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Tasks */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-ocean-deep flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Tasks Completed</span>
                    </h4>
                    <ul className="space-y-2">
                      {day.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3 h-3 text-water-fresh flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Collected */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-ocean-deep flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Data Collected</span>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {day.dataCollected}
                    </p>
                  </div>

                  {/* Analysis */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-ocean-deep flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4" />
                      <span>Key Analysis</span>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {day.analysis}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Summary */}
        <Card className="mt-16 border-water-fresh/30 shadow-water">
          <CardHeader className="bg-gradient-to-r from-water-fresh/10 to-secondary-light/10">
            <CardTitle className="text-2xl text-center text-water-fresh">
              Project Progress Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-ocean-deep">15</div>
                <div className="text-sm text-muted-foreground">Days Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-water-fresh">47</div>
                <div className="text-sm text-muted-foreground">Tasks Accomplished</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-aqua-bright">12</div>
                <div className="text-sm text-muted-foreground">Data Sources Analyzed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">89%</div>
                <div className="text-sm text-muted-foreground">Forecast Model Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};