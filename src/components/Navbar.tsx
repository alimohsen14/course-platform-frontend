import { useNavigate } from "react-router-dom";
import { FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses-section");
    coursesSection?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProfileClick = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-gray-800">EduHub</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => navigate("/home")}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={scrollToCourses}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </button>
              <button
                onClick={scrollToCourses}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FiBell className="h-5 w-5" />
            </button>
            <button
              onClick={handleProfileClick}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
            >
              <FiUser className="h-5 w-5" />
            </button>

            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
