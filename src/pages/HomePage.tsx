/* eslint-disable */
import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

export function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await getProfile();
        setUser(res);
      } catch (err) {
        console.error("Failed to load profile", err);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10 text-3xl font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="text-center p-8 text-3xl">
      Welcome back, {user?.name || "User"} 👋
    </div>
  );
}
