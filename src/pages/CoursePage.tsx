/* eslint-disable */
import { useParams } from "react-router-dom";
import CourseHero from "../components/course/CourseHero";
import CourseStats from "../components/course/CourseStats";
import CourseWhatYouLearn from "../components/course/CourseWhatYouLearn";
import CoursePaymentOptions from "../components/course/CoursePaymentOptions";
import CourseContent from "../components/course/CourseContent";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function CoursePage() {
  const { id } = useParams();

  // Temporary Data (Will be replaced with backend API)
  const courseData = {
    title: "Complete Web Development Bootcamp",
    instructor: {
      name: "Ali Mohsen",
      avatar: "https://i.pravatar.cc/150?img=8",
      students: 1250,
      hours: 24,
    },
    bannerImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "", // leave empty to show image preview only

    learnItems: [
      { text: "Build 15+ real-world web development projects" },
      { text: "Understand HTML, CSS, JavaScript deeply" },
      { text: "Work with React.js and API integration" },
      { text: "Deploy websites using modern tools" },
      { text: "Responsive design for all devices" },
      { text: "Become a confident web developer" },
    ],

    price: 79.99,

    isEnrolled: false,

    sections: [
      {
        title: "Introduction to Web Development",
        locked: false,
        lessons: [
          { title: "What is Web Development?", duration: "05:32" },
          { title: "How the Web Works", duration: "06:10" },
        ],
      },
      {
        title: "HTML Basics",
        locked: true,
        lessons: [
          { title: "HTML Structure", duration: "08:10" },
          { title: "Tags and Elements", duration: "09:48" },
        ],
      },
      {
        title: "CSS Fundamentals",
        locked: true,
        lessons: [
          { title: "Selectors & Styling", duration: "10:01" },
          { title: "Layouts & Flexbox", duration: "14:30" },
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Hero */}
        <CourseHero
          title={courseData.title}
          instructor={courseData.instructor}
          bannerImage={courseData.bannerImage}
          videoUrl={courseData.videoUrl}
        />

        {/* Stats */}
        <CourseStats
          hours={courseData.instructor.hours}
          projects={15}
          certificate={true}
        />

        {/* What You Learn */}
        <CourseWhatYouLearn items={courseData.learnItems} />

        {/* Page Layout: Content + Payment */}
        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <CourseContent
              isEnrolled={courseData.isEnrolled}
              sections={courseData.sections}
            />
          </div>

          {/* Purchase Options */}
          <div className="lg:col-span-1">
            <CoursePaymentOptions
              price={courseData.price}
              onEnroll={() => console.log("Buy full course")}
              onPayPerSection={() => console.log("Pay per section")}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
