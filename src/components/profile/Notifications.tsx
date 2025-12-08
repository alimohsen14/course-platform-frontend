import { FaBell, FaCheckCircle } from 'react-icons/fa';

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'New course available',
      message: 'The course "Advanced React Patterns" is now available',
      time: '2 hours ago',
      read: false,
      icon: '📚'
    },
    {
      id: 2,
      title: 'Assignment graded',
      message: 'Your submission for "JavaScript Basics" has been graded',
      time: '1 day ago',
      read: true,
      icon: '📝'
    },
    {
      id: 3,
      title: 'New message',
      message: 'You have a new message from your instructor',
      time: '2 days ago',
      read: true,
      icon: '💬'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg ${
              !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <span className="text-xl">{notification.icon}</span>
              </div>
              <div className="ml-3 flex-1">
                <p className={`text-sm font-medium ${
                  notification.read ? 'text-gray-900' : 'text-blue-800'
                }`}>
                  {notification.title}
                </p>
                <p className="text-sm text-gray-600">
                  {notification.message}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {notification.time}
                </p>
              </div>
              {!notification.read && (
                <button className="ml-2 text-blue-600 hover:text-blue-800">
                  <FaCheckCircle className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;