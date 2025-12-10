import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { GoogleCallbackPage } from "./pages/GoogleCallbackPage";
import ProfilePage from "./pages/ProfilePage";
import CoursePage from "./pages/CoursePage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/google-callback" element={<GoogleCallbackPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/course/:id" element={<CoursePage />} />
    </Routes>
  );
}
