import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { App } from "konsta/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n";
import { useUserStore } from "./lib/store";

// Views
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import WishSetting from "./views/WishSetting";
import Progress from "./views/Progress";
import Leaderboard from "./views/Leaderboard";
import Profile from "./views/Profile";
import Community from "./views/Community";
import Statistics from "./views/Statistics";
import WritingPractice from "./views/WritingPractice";
import Paywall from "./views/Paywall";
import Login from "./views/Login";
import Register from "./views/Register";
import Onboarding from "./views/Onboarding";
import About from "./views/About";
import WaitlistThanks from "./views/WaitlistThanks";

// Components
import ProtectedRoute from "./lib/ProtectedRoute";

export default function Root() {
  const [theme, setTheme] = useState<"ios" | "material">("material");
  const { isAuthenticated } = useUserStore();

  useLayoutEffect(() => {
    if (window.location.href.includes("safe-areas")) {
      const html = document.documentElement;

      if (html) {
        html.style.setProperty(
          "--k-safe-area-top",
          theme === "ios" ? "44px" : "24px"
        );

        html.style.setProperty("--k-safe-area-bottom", "34px");
      }
    }
  }, [theme]);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App safeAreas theme={theme}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/about" element={<About />} />
            <Route path="/waitlist-thanks" element={<WaitlistThanks />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home theme={theme} onTheme={setTheme} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wish-setting"
              element={
                <ProtectedRoute>
                  <WishSetting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress"
              element={
                <ProtectedRoute>
                  <Progress />
                </ProtectedRoute>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute>
                  <Leaderboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <ProtectedRoute>
                  <Statistics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/writing-practice"
              element={
                <ProtectedRoute>
                  <WritingPractice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/paywall"
              element={
                <ProtectedRoute>
                  <Paywall />
                </ProtectedRoute>
              }
            />
          </Routes>
        </App>
      </BrowserRouter>
    </I18nextProvider>
  );
}
