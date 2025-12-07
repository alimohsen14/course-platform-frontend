import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { GoogleCallbackPage } from "./pages/GoogleCallbackPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/google-callback" element={<GoogleCallbackPage />} />

      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
