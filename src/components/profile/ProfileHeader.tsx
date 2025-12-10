import { useState } from "react";
import { FiEdit2, FiLock } from "react-icons/fi";
import EditProfileModal from "./modals/EditProfileModal";
import ChangePasswordModal from "./modals/ChangePasswordModal";
import { updateProfile } from "../../services/authService";

interface User {
  name: string;
  email: string;
  phone: string;
  provider?: string;
  avatar?: string;
}

const ProfileHeader = () => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleSaveProfile = async (updatedFields: {
    name: string;
    phone: string;
  }) => {
    const res = await updateProfile(updatedFields);

    if (res.user) {
      localStorage.setItem("user", JSON.stringify(res.user));
      setUser(res.user);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Avatar Section */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-gray-400">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </span>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.name || "User Name"}
              </h1>
              <div className="mt-2 space-y-1 text-gray-600">
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📧</span>
                  {user.email || "user@example.com"}
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📱</span>
                  {user.phone || "+1 (555) 000-0000"}
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-4 md:mt-0 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiEdit2 className="mr-2" />
                Edit Profile
              </button>

              {user.provider !== "GOOGLE" && (
                <button
                  onClick={() => setIsPasswordModalOpen(true)}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  <FiLock className="mr-2" />
                  Change Password
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};

export default ProfileHeader;
