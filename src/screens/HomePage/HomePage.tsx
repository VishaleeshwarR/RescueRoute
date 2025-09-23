import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  User, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  MapPin
} from "lucide-react";

interface HomePageProps {
  onNavigateToProfile?: () => void;
  onNavigateToSettings?: () => void;
  onLogout?: () => void;
}

export const HomePage = ({ onNavigateToProfile, onNavigateToSettings, onLogout }: HomePageProps): JSX.Element => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const userCards = [
    {
      name: "XXXXXXX",
      mobile: "XXXXXXXXXX",
      details: [
        "ZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZ"
      ]
    },
    {
      name: "YYYYYYY",
      mobile: "YYYYYYYYYY",
      details: [
        "AAAAAAAAAAAAAAAAAAA",
        "AAAAAAAAAAAAAAAAAAA"
      ]
    },
    {
      name: "WWWWWWW",
      mobile: "WWWWWWWWWW",
      details: [
        "BBBBBBBBBBBBBBBBBBB",
        "BBBBBBBBBBBBBBBBBBB"
      ]
    }
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % userCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + userCards.length) % userCards.length);
  };

  const currentCard = userCards[currentCardIndex];

  return (
    <main className="bg-neutral-950 min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="text-gray-400 text-sm">main page</div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={onNavigateToProfile}
            className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-full p-0 border-0"
          >
            <User className="w-6 h-6 text-white" />
          </Button>
          <Button
            onClick={onNavigateToSettings}
            className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-full p-0 border-0"
          >
            <Settings className="w-6 h-6 text-white" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 mt-8">
        {/* Rating Circle */}
        <div className="relative mb-16">
          <div className="w-64 h-64 relative">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full border-8 border-neutral-800"></div>
            
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 256 256">
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 120 * 0.75} ${2 * Math.PI * 120}`}
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f2561f" />
                  <stop offset="100%" stopColor="#ff5519" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f2561f] to-[#ff5519] rounded-full flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-2xl font-semibold">Rating</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between w-full max-w-md mb-8">
          <Button
            onClick={prevCard}
            className="w-12 h-12 bg-transparent hover:bg-neutral-800 rounded-full p-0 border-0"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </Button>
          
          <div className="flex space-x-2">
            {userCards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCardIndex ? 'bg-[#f2561f]' : 'bg-neutral-600'
                }`}
              />
            ))}
          </div>
          
          <Button
            onClick={nextCard}
            className="w-12 h-12 bg-transparent hover:bg-neutral-800 rounded-full p-0 border-0"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </Button>
        </div>

        {/* User Card */}
        <Card className="w-full max-w-md bg-neutral-800/80 backdrop-blur-sm border-neutral-700 border rounded-3xl">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">NAME : </span>
                <span className="text-white font-medium">{currentCard.name}</span>
              </div>
              
              <div>
                <span className="text-gray-400 text-sm">MOBILE NO : </span>
                <span className="text-white font-medium">{currentCard.mobile}</span>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm mb-2">DETAILS:</div>
                <div className="space-y-1">
                  {currentCard.details.map((detail, index) => (
                    <div key={index} className="text-white text-sm font-mono">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Location Icon */}
        <div className="mt-12 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#f2561f] to-[#ff5519] rounded-full flex items-center justify-center relative">
            <MapPin className="w-8 h-8 text-white" />
            
            {/* Connecting Line */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
                <line x1="1" y1="0" x2="1" y2="32" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-4 w-16 h-16 bg-gradient-to-br from-[#f2561f]/20 to-[#ff5519]/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-4 w-20 h-20 bg-gradient-to-br from-[#f2561f]/15 to-[#ff5519]/15 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-[#f2561f]/25 to-[#ff5519]/25 rounded-full blur-lg"></div>
    </main>
  );
};