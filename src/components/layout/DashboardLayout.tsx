/* Dashboard Layout - Fixed Navbar + Footer + Dynamic Content */

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <Navbar />
      </div>

  
      <main className="flex-1 pt-20 pb-20 px-4"> 
   
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

 
      <footer className="bg-white shadow z-40">
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
