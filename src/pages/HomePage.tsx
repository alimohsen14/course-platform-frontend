import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";
import DashboardLayout from "../components/layout/DashboardLayout";


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
          <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="text-center p-10 text-3xl font-semibold">
          Loading...
        </div>
      </div>
       </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

   
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        <CoursesSection />
      </main>
     
    </div>
     </DashboardLayout>
  );
}
