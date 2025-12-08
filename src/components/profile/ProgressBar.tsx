const ProgressBar = () => {
  const progress = 75; // Example progress percentage

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Course Completion</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {progress}% of your enrolled courses completed
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;