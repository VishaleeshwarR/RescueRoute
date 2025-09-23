import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Eye, EyeOff } from "lucide-react";

const blurElements = [
  {
    className:
      "top-[459px] left-[279px] w-[90px] h-[90px] rounded-[45px] blur-[50px] bg-[linear-gradient(180deg,rgba(251,90,33,0.5)_0%,rgba(255,85,25,0.5)_100%)] absolute rotate-[0.03deg]",
  },
  {
    className:
      "top-[-23px] left-[368px] w-[90px] h-[90px] rounded-[45px] blur-[50px] bg-[linear-gradient(180deg,rgba(251,90,33,0.5)_0%,rgba(255,85,25,0.5)_100%)] absolute rotate-[0.03deg]",
  },
  {
    className:
      "top-[638px] left-[42px] w-[90px] h-[90px] rounded-[45px] blur-[50px] bg-[linear-gradient(180deg,rgba(251,90,33,0.5)_0%,rgba(255,85,25,0.5)_100%)] absolute rotate-[0.03deg]",
  },
];

interface LoginPageProps {
  onNavigateToSignup?: () => void;
  onLogin?: () => void;
}

export const LoginPage = ({ onNavigateToSignup, onLogin }: LoginPageProps): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
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
        className="top-[50px] left-0 w-[123px] h-[290px] absolute rotate-[0.03deg]"
        alt="Ellipse"
        src="/ellipse-11.svg"
      />

      <div className="top-[300px] left-[42px] absolute">
        <h1 className="text-white text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-sm">Sign in to continue your journey</p>
      </div>

      <Card className="top-[400px] left-[42px] w-[327px] h-[450px] rounded-[44px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(195,175,175,0.15)_0%,rgba(57,54,54,0.15)_100%)] absolute rotate-[0.03deg] border-0">
        <CardContent className="p-8 relative w-full h-full">
          <div className="space-y-6">
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
                  placeholder="Enter your password"
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

            <div className="flex justify-end">
              <Button className="bg-transparent hover:bg-transparent p-0 h-auto border-0 text-[#f2561f] text-sm">
                Forgot Password?
              </Button>
            </div>

            <Button 
              onClick={onLogin}
              className="w-full h-[45px] bg-[#f2561f] rounded-[22.5px] hover:bg-[#d94a1a] border-0"
            >
              <span className="font-normal text-white text-sm">
                Sign In
              </span>
            </Button>

            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            <Button className="w-full h-[45px] bg-white/10 border border-white/20 rounded-[22.5px] hover:bg-white/20 transition-colors">
              <span className="font-normal text-white text-sm">
                Continue with Google
              </span>
            </Button>

            <div className="text-center">
              <span className="text-gray-400 text-sm">Don't have an account? </span>
              <Button
                onClick={onNavigateToSignup}
                className="bg-transparent hover:bg-transparent p-0 h-auto border-0 text-[#f2561f] text-sm font-medium"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
