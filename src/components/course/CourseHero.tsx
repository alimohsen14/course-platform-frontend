import { FiPlay } from "react-icons/fi";

interface CourseHeroProps {
  title: string;
  instructor: {
    name: string;
    avatar?: string;
    students: number;
    hours: number;
  };
  bannerImage?: string;
  videoUrl?: string;
}

export default function CourseHero({
  title,
  instructor,
  bannerImage,
  videoUrl,
}: CourseHeroProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
      {/* Background */}
      <div className="h-64 w-full bg-gray-300">
        {bannerImage && (
          <img
            src={bannerImage}
            alt="Course Banner"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Play Button if video exists */}
      {videoUrl && (
        <button className="absolute inset-0 flex items-center justify-center text-white bg-black/30">
          <FiPlay className="text-5xl" />
        </button>
      )}

      {/* Title */}
      <h1 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
        {title}
      </h1>

      {/* Instructor Info */}
      <div className="absolute bottom-[-50px] left-6 flex items-center space-x-3">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div className="text-sm md:text-base">
          <p className="font-semibold">{instructor.name}</p>
          <p className="text-gray-600">
            {instructor.students} students • {instructor.hours} hours total
          </p>
        </div>
      </div>
    </div>
  );
}
