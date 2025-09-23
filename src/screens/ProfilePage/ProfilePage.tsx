import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  ArrowLeft, 
  Camera, 
  Edit3, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Users,
  Star
} from "lucide-react";

const achievements = [
  { title: "Project Master", description: "Completed 50+ projects", icon: Award, color: "text-yellow-500" },
  { title: "Team Player", description: "Collaborated with 20+ teams", icon: Users, color: "text-blue-500" },
  { title: "Top Performer", description: "Rated 5 stars consistently", icon: Star, color: "text-purple-500" },
];

const stats = [
  { label: "Projects Completed", value: "127" },
  { label: "Team Collaborations", value: "45" },
  { label: "Client Reviews", value: "4.9/5" },
  { label: "Years Experience", value: "5+" },
];

interface ProfilePageProps {
  onNavigateBack?: () => void;
}

export const ProfilePage = ({ onNavigateBack }: ProfilePageProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Anderson",
    title: "Senior Product Designer",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate product designer with 5+ years of experience creating user-centered digital experiences. I love turning complex problems into simple, beautiful solutions.",
    joinDate: "January 2020"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="bg-neutral-950 min-h-screen w-full">
      {/* Header */}
      <header className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onNavigateBack}
              className="bg-transparent hover:bg-neutral-800 p-2 border-0"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </Button>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
          </div>
          
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[#f2561f] hover:bg-[#d94a1a] text-white px-4 py-2 rounded-lg border-0"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-[#f2561f] to-[#d94a1a] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  JA
                </div>
                {isEditing && (
                  <Button className="absolute bottom-0 right-0 w-10 h-10 bg-neutral-800 hover:bg-neutral-700 rounded-full p-0 border-0">
                    <Camera className="w-5 h-5 text-white" />
                  </Button>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="text-3xl font-bold bg-transparent border-b border-neutral-700 text-white focus:outline-none focus:border-[#f2561f] transition-colors"
                    />
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="text-xl bg-transparent border-b border-neutral-700 text-gray-300 focus:outline-none focus:border-[#f2561f] transition-colors"
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{profileData.name}</h2>
                    <p className="text-xl text-gray-300 mb-4">{profileData.title}</p>
                  </div>
                )}

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                </div>

                <div className="mt-4">
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      rows={3}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors resize-none"
                    />
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{profileData.bio}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2 mt-4 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {profileData.joinDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievements */}
          <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg">
                    <div className={`w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{achievement.title}</p>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800 border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Completed "Mobile App Redesign" project</p>
                    <p className="text-gray-400 text-xs">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Updated profile information</p>
                    <p className="text-gray-400 text-xs">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Joined "Design System" team</p>
                    <p className="text-gray-400 text-xs">3 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Received 5-star rating from client</p>
                    <p className="text-gray-400 text-xs">1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};