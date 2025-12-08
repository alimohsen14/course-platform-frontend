import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    coursesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 text-white">
        {/* Left side - Text Content */}
        <div className="flex-1">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl max-w-xl backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Start Your Learning Journey
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Explore top courses and boost your career with expert instructors. 
              Join a community of lifelong learners today.
            </p>
            <button
              onClick={scrollToCourses}
              className="flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Browse Courses</span>
              <FaArrowRight className="mt-0.5" />
            </button>
          </div>
        </div>

        {/* Right side - Illustration Placeholder */}
        <div className="w-full md:w-[380px] h-[260px] rounded-2xl bg-white/20 border border-white/30 shadow-lg flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">📚</div>
            <p className="text-white/80 font-medium">Interactive Learning Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;