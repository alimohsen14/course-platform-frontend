/* eslint-disable */
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function GoogleCallbackPage() {
  const navigate = useNavigate();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const params = new URLSearchParams(window.location.search);

    const isNewUser = params.get("isNewUser") === "true";
    const email = params.get("email") || "";
    const name = params.get("name") || "";
    const providerId = params.get("providerId") || "";
    const accessToken = params.get("accessToken") || "";
    const refreshToken = params.get("refreshToken") || "";

    console.log("Google callback:", {
      isNewUser,
      email,
      name,
      providerId,
      accessToken,
    });

    // NEW USER → go to SIGNUP
    if (isNewUser) {
      navigate(
        `/signup?google=true&email=${encodeURIComponent(
          email
        )}&name=${encodeURIComponent(name)}&providerId=${encodeURIComponent(
          providerId
        )}`,
        { replace: true }
      );
      return;
    }

    // EXISTING USER → go HOME
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/home", { replace: true });
      return;
    }

    navigate("/login");
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-semibold text-blue-600 animate-pulse">
        Processing Google Login...
      </h2>
    </div>
  );
}
