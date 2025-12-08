import { FaTrophy } from 'react-icons/fa';

const Certificates = () => {
  // In a real app, this would come from an API
  const certificatesCount = 3;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
          <FaTrophy className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">Certificates Earned</h3>
          <p className="text-gray-600">{certificatesCount} certificates</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          View all
        </button>
      </div>
    </div>
  );
};

export default Certificates;