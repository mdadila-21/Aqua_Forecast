import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, MapPin, Droplets, Calendar, Activity } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const DataVisualization = () => {
  const [selectedReservoir, setSelectedReservoir] = useState('reservoir1');

  // Sample data for demonstrations
  const demandForecastData = [
    { year: '2020', demand: 1200, capacity: 1500 },
    { year: '2021', demand: 1280, capacity: 1500 },
    { year: '2022', demand: 1350, capacity: 1500 },
    { year: '2023', demand: 1420, capacity: 1500 },
    { year: '2024', demand: 1495, capacity: 1500 },
    { year: '2025', demand: 1580, capacity: 1500 },
    { year: '2026', demand: 1670, capacity: 1600 },
    { year: '2027', demand: 1765, capacity: 1700 },
    { year: '2028', demand: 1860, capacity: 1800 },
    { year: '2029', demand: 1960, capacity: 1900 },
    { year: '2030', demand: 2065, capacity: 2000 },
  ];

  const monthlyUsageData = [
    { month: 'Jan', usage: 95, rainfall: 45 },
    { month: 'Feb', usage: 88, rainfall: 52 },
    { month: 'Mar', usage: 102, rainfall: 38 },
    { month: 'Apr', usage: 118, rainfall: 25 },
    { month: 'May', usage: 135, rainfall: 15 },
    { month: 'Jun', usage: 158, rainfall: 8 },
    { month: 'Jul', usage: 175, rainfall: 5 },
    { month: 'Aug', usage: 168, rainfall: 12 },
    { month: 'Sep', usage: 142, rainfall: 28 },
    { month: 'Oct', usage: 125, rainfall: 42 },
    { month: 'Nov', usage: 108, rainfall: 55 },
    { month: 'Dec', usage: 98, rainfall: 48 },
  ];

  const reservoirStatusData = [
    { name: 'Full Capacity', value: 35, color: '#22c55e' },
    { name: 'Good Level', value: 40, color: '#3b82f6' },
    { name: 'Moderate Level', value: 20, color: '#f59e0b' },
    { name: 'Low Level', value: 5, color: '#ef4444' },
  ];

  const reservoirs = [
    { id: 'reservoir1', name: 'Central Reservoir', capacity: 500, current: 425, status: 'Good', location: 'Central District' },
    { id: 'reservoir2', name: 'North Reservoir', capacity: 350, current: 315, status: 'Good', location: 'North District' },
    { id: 'reservoir3', name: 'South Reservoir', capacity: 450, current: 180, status: 'Moderate', location: 'South District' },
    { id: 'reservoir4', name: 'East Reservoir', capacity: 300, current: 75, status: 'Low', location: 'East District' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-sky-light via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-ocean-deep to-aqua-bright rounded-full mb-6">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Data Visualization Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Interactive charts and real-time data analysis for water demand forecasting and reservoir capacity management
          </p>
        </div>

        <Tabs defaultValue="forecast" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full max-w-4xl mx-auto">
            <TabsTrigger value="forecast" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Demand Forecast</span>
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Usage Patterns</span>
            </TabsTrigger>
            <TabsTrigger value="reservoirs" className="flex items-center space-x-2">
              <Droplets className="w-4 h-4" />
              <span>Reservoir Status</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Location Map</span>
            </TabsTrigger>
          </TabsList>

          {/* Demand Forecast Tab */}
          <TabsContent value="forecast">
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-ocean-deep" />
                  <span>Water Demand vs. Storage Capacity Forecast (2020-2030)</span>
                </CardTitle>
                <CardDescription>
                  Projected water demand compared to planned reservoir capacity expansion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={demandForecastData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="year" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="capacity" 
                        stackId="1" 
                        stroke="#22c55e" 
                        fill="#22c55e" 
                        fillOpacity={0.3}
                        name="Storage Capacity (ML)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="demand" 
                        stackId="2" 
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        fillOpacity={0.6}
                        name="Projected Demand (ML)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+72%</div>
                    <div className="text-sm text-blue-700">Demand Growth by 2030</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+33%</div>
                    <div className="text-sm text-green-700">Capacity Expansion Required</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2026</div>
                    <div className="text-sm text-orange-700">Critical Year for Expansion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Usage Patterns Tab */}
          <TabsContent value="usage">
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-ocean-deep" />
                  <span>Monthly Water Usage vs. Rainfall Patterns</span>
                </CardTitle>
                <CardDescription>
                  Seasonal water consumption trends correlated with precipitation data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyUsageData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar dataKey="usage" fill="#3b82f6" name="Water Usage (ML)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="rainfall" fill="#22c55e" name="Rainfall (mm)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-ocean-deep">Key Insights:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Peak usage occurs during summer months (June-August)</li>
                      <li>• Inverse correlation between rainfall and consumption</li>
                      <li>• 40% increase in usage during dry season</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-water-fresh">Recommendations:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Implement water restrictions during peak months</li>
                      <li>• Develop rainwater harvesting programs</li>
                      <li>• Increase storage capacity for dry season</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reservoir Status Tab */}
          <TabsContent value="reservoirs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="w-5 h-5 text-ocean-deep" />
                    <span>Overall Reservoir Status Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={reservoirStatusData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {reservoirStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle>Individual Reservoir Details</CardTitle>
                  <CardDescription>Current capacity and status of each reservoir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reservoirs.map((reservoir) => (
                      <div key={reservoir.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{reservoir.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reservoir.status)}`}>
                            {reservoir.status}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{reservoir.location}</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current: {reservoir.current} ML</span>
                            <span>Capacity: {reservoir.capacity} ML</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-ocean-deep to-aqua-bright h-2 rounded-full"
                              style={{ width: `${(reservoir.current / reservoir.capacity) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {Math.round((reservoir.current / reservoir.capacity) * 100)}% capacity
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Location Map Tab */}
          <TabsContent value="map">
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-ocean-deep" />
                  <span>Reservoir Location and Status Map</span>
                </CardTitle>
                <CardDescription>
                  Geographic distribution of water storage facilities with real-time status indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-ocean-deep mx-auto" />
                    <h3 className="text-xl font-semibold text-ocean-deep">Interactive Map</h3>
                    <p className="text-muted-foreground max-w-md">
                      This section would contain an interactive map showing reservoir locations, 
                      current water levels, and status indicators. Integration with mapping services 
                      would provide real-time geographic context for water resource management.
                    </p>
                    <Button variant="ocean">
                      View Full Map Integration
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                  {reservoirs.map((reservoir) => (
                    <div key={reservoir.id} className="text-center p-3 bg-card rounded-lg border">
                      <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                        reservoir.status === 'Good' ? 'bg-green-500' :
                        reservoir.status === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <div className="text-sm font-medium">{reservoir.name}</div>
                      <div className="text-xs text-muted-foreground">{reservoir.location}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};