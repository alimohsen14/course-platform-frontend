import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileHeader from '../components/profile/ProfileHeader';
import MyCourses from '../components/profile/MyCourses';
import Certificates from '../components/profile/Certificates';
import Notifications from '../components/profile/Notifications';
import ProgressBar from '../components/profile/ProgressBar';
import DashboardLayout from '../components/layout/DashboardLayout';
interface User {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

const ProfilePage = () => {
 const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }

    // Listen for storage changes to update the UI when user data changes
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      if (updatedUser) {
        setUser(JSON.parse(updatedUser));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <DashboardLayout>
    
 
    <div className="min-h-screen bg-gray-50 flex flex-col">
 
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MyCourses />
            </div>
            
            <div className="space-y-6">
              <Certificates />
              <ProgressBar />
              <Notifications />
            </div>
          </div>
        </div>
      </main>
  
    </div>
       </DashboardLayout>
  );
};

export default ProfilePage;