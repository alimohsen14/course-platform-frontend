import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import EditProfileModal from './modals/EditProfileModal';

interface User {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

const ProfileHeader = () => {
  const user: User = JSON.parse(localStorage.getItem("user") || "{}");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSaveProfile = (updatedUser: User) => {
    // In a real app, you would update the user in the backend here
    localStorage.setItem("user", JSON.stringify({ ...user, ...updatedUser }));
    // Force a re-render by updating the local storage
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
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
                {user.name?.charAt(0).toUpperCase() || 'U'}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name || 'User Name'}</h1>
              <div className="mt-2 space-y-1 text-gray-600">
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📧</span>
                  {user.email || 'user@example.com'}
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📱</span>
                  {user.phone || '+1 (555) 000-0000'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditModalOpen(true)}
              className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiEdit2 className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default ProfileHeader;