import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const blurElements = [
  {
    className:
      "top-[200px] left-[50px] w-[80px] h-[80px] rounded-[40px] blur-[45px] bg-[linear-gradient(180deg,rgba(251,90,33,0.4)_0%,rgba(255,85,25,0.4)_100%)] absolute",
  },
  {
    className:
      "top-[600px] left-[300px] w-[100px] h-[100px] rounded-[50px] blur-[55px] bg-[linear-gradient(180deg,rgba(251,90,33,0.3)_0%,rgba(255,85,25,0.3)_100%)] absolute",
  },
  {
    className:
      "top-[100px] left-[320px] w-[70px] h-[70px] rounded-[35px] blur-[40px] bg-[linear-gradient(180deg,rgba(251,90,33,0.5)_0%,rgba(255,85,25,0.5)_100%)] absolute",
  },
];

interface SignupPageProps {
  onNavigateToLogin?: () => void;
}

export const SignupPage = ({ onNavigateToLogin }: SignupPageProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="bg-neutral-950 overflow-hidden w-full min-w-[412.52px] min-h-[917.23px] relative">
      {blurElements.map((element, index) => (
        <div key={`blur-${index}`} className={element.className} />
      ))}

      <img
        className="top-[30px] right-0 w-[100px] h-[250px] absolute opacity-30"
        alt="Decoration"
        src="/ellipse-11.svg"
      />

      <Button
        onClick={onNavigateToLogin}
        className="top-[60px] left-[30px] w-[50px] h-[50px] bg-transparent hover:bg-white/10 rounded-full absolute border-0 p-0"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </Button>

      <div className="top-[140px] left-[42px] absolute">
        <h1 className="text-white text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-400 text-sm">Join us and start your journey</p>
      </div>

      <Card className="top-[240px] left-[42px] w-[327px] h-[520px] rounded-[44px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(195,175,175,0.15)_0%,rgba(57,54,54,0.15)_100%)] absolute border-0">
        <CardContent className="p-8 relative w-full h-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[22.5px] px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[22.5px] px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[22.5px] px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors"
                  placeholder="Create a password"
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent p-0 h-auto border-0"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[22.5px] px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#f2561f] transition-colors"
                  placeholder="Confirm your password"
                />
                <Button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent p-0 h-auto border-0"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <Button className="w-full h-[45px] bg-[#f2561f] rounded-[22.5px] hover:bg-[#d94a1a] border-0 mt-8">
              <span className="font-normal text-white text-sm">
                Create Account
              </span>
            </Button>

            <div className="text-center mt-6">
              <span className="text-gray-400 text-sm">Already have an account? </span>
              <Button
                onClick={onNavigateToLogin}
                className="bg-transparent hover:bg-transparent p-0 h-auto border-0 text-[#f2561f] text-sm font-medium"
              >
                Sign In
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};