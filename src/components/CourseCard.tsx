import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export type Course = {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  price: string;
  image: string;
  progress?: number;
};

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* Course Image */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/seed/${course.id}/400/300`;
          }}
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 h-14">
          {course.title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span>By {course.instructor}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-yellow-400">
            <FaStar className="mr-1" />
            <span className="text-gray-800 font-medium ml-1">
              {course.rating.toFixed(1)}
            </span>
          </div>

          <span className="text-lg font-bold text-blue-600">
            {course.price}
          </span>
        </div>

        <button
          onClick={handleNavigate}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
