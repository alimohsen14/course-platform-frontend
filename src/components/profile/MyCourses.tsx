import { FaChevronRight } from 'react-icons/fa';
import CourseCard from '../CourseCard';
import { Course } from '../CourseCard';

const MyCourses = () => {
  // Sample enrolled courses data
  const enrolledCourses: Course[] = [
    {
      id: 1,
      title: 'Advanced JavaScript: Modern ES6+',
      category: 'Development',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
      progress: 75
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      instructor: 'Michael Chen',
      rating: 4.7,
      price: '$74.99',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      progress: 30
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View all courses <FaChevronRight className="ml-1 text-sm" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="relative">
            <CourseCard course={course} />
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;