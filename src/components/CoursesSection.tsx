import { FaChevronRight } from 'react-icons/fa6';
import CourseCard, { Course } from './CourseCard';

const CoursesSection = () => {
  // Sample course data - in a real app, this would come from an API
  const popularCourses: Course[] = [
    {
      id: 1,
      title: 'Advanced JavaScript: Modern ES6+',
      category: 'Development',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      instructor: 'Michael Chen',
      rating: 4.7,
      price: '$74.99',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Data Science for Beginners',
      category: 'Data Science',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.9,
      price: '$99.99',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      category: 'Mobile',
      instructor: 'James Wilson',
      rating: 4.6,
      price: '$84.99',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Digital Marketing Masterclass',
      category: 'Marketing',
      instructor: 'Lisa Thompson',
      rating: 4.5,
      price: '$69.99',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Python for Data Analysis',
      category: 'Programming',
      instructor: 'David Kim',
      rating: 4.8,
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="courses-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
            <p className="mt-2 text-gray-600">Hand-picked courses to get you started</p>
          </div>
          <a 
            href="#" 
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View all courses <FaChevronRight className="ml-1 text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;