import React, { useState } from "react";
import { LoginPage } from "./screens/LoginPage/LoginPage";
import { SignupPage } from "./screens/SignupPage/SignupPage";
import { HomePage } from "./screens/HomePage/HomePage";
import { ProfilePage } from "./screens/ProfilePage/ProfilePage";

type Page = "login" | "signup" | "home" | "profile";

export const App = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<Page>("login");

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "login":
        return (
          <LoginPage 
            onNavigateToSignup={() => navigateToPage("signup")}
            onLogin={() => navigateToPage("home")}
          />
        );
      case "signup":
        return (
          <SignupPage 
            onNavigateToLogin={() => navigateToPage("login")}
            onSignup={() => navigateToPage("home")}
          />
        );
      case "home":
        return (
          <HomePage 
            onLogout={() => navigateToPage("login")}
            onNavigateToProfile={() => navigateToPage("profile")}
            onNavigateToSettings={() => navigateToPage("profile")}
          />
        );
      case "profile":
        return (
          <ProfilePage 
            onNavigateBack={() => navigateToPage("home")}
          />
        );
      default:
        return <LoginPage onNavigateToSignup={() => navigateToPage("signup")} />;
    }
  };

  return <div className="w-full min-h-screen">{renderCurrentPage()}</div>;
};