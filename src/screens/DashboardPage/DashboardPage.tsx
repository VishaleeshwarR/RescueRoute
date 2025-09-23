import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  User, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  TrendingUp, 
  Calendar,
  MessageSquare,
  Heart,
  Share2
} from "lucide-react";

const statsCards = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12%",
    trend: "up",
    color: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    title: "Active Tasks",
    value: "156",
    change: "+8%",
    trend: "up",
    color: "bg-gradient-to-r from-green-500 to-green-600"
  },
  {
    title: "Completed",
    value: "89",
    change: "+23%",
    trend: "up",
    color: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    title: "Team Members",
    value: "12",
    change: "+2",
    trend: "up",
    color: "bg-gradient-to-r from-orange-500 to-orange-600"
  }
];

const recentActivities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "completed task",
    target: "Website Redesign",
    time: "2 hours ago",
    avatar: "SJ"
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "created project",
    target: "Mobile App",
    time: "4 hours ago",
    avatar: "MC"
  },
  {
    id: 3,
    user: "Emma Davis",
    action: "commented on",
    target: "API Integration",
    time: "6 hours ago",
    avatar: "ED"
  }
];

interface DashboardPageProps {
  onLogout?: () => void;
}

export const DashboardPage = ({ onLogout }: DashboardPageProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="bg-neutral-950 min-h-screen w-full">
      {/* Header */}
      <header className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors w-64"
              />
            </div>
            
            <Button className="bg-transparent hover:bg-neutral-800 p-2 border-0">
              <Bell className="w-5 h-5 text-gray-400" />
            </Button>
            
            <Button className="bg-transparent hover:bg-neutral-800 p-2 border-0">
              <Settings className="w-5 h-5 text-gray-400" />
            </Button>
            
            <Button 
              onClick={onLogout}
              className="bg-transparent hover:bg-neutral-800 p-2 border-0"
            >
              <User className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h2>
          <p className="text-gray-400">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card key={index} className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  <span className="text-gray-400 text-sm ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                  <Button className="bg-[#f2561f] hover:bg-[#d94a1a] text-white px-4 py-2 rounded-lg border-0">
                    <Plus className="w-4 h-4 mr-2" />
                    New Task
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg">
                      <div className="w-10 h-10 bg-[#f2561f] rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {activity.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          <span className="font-medium">{activity.user}</span>
                          <span className="text-gray-400 ml-1">{activity.action}</span>
                          <span className="font-medium ml-1">{activity.target}</span>
                        </p>
                        <p className="text-gray-400 text-sm">{activity.time}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-transparent hover:bg-neutral-700 p-2 border-0">
                          <Heart className="w-4 h-4 text-gray-400" />
                        </Button>
                        <Button className="bg-transparent hover:bg-neutral-700 p-2 border-0">
                          <MessageSquare className="w-4 h-4 text-gray-400" />
                        </Button>
                        <Button className="bg-transparent hover:bg-neutral-700 p-2 border-0">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start border-0 h-12">
                    <Plus className="w-4 h-4 mr-3" />
                    Create New Project
                  </Button>
                  
                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start border-0 h-12">
                    <Calendar className="w-4 h-4 mr-3" />
                    Schedule Meeting
                  </Button>
                  
                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start border-0 h-12">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Send Message
                  </Button>
                  
                  <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white justify-start border-0 h-12">
                    <TrendingUp className="w-4 h-4 mr-3" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Widget */}
            <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Today's Schedule</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-white text-sm font-medium">Team Standup</p>
                      <p className="text-gray-400 text-xs">9:00 AM - 9:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-white text-sm font-medium">Client Review</p>
                      <p className="text-gray-400 text-xs">2:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="text-white text-sm font-medium">Project Planning</p>
                      <p className="text-gray-400 text-xs">4:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};