import { useState } from "react";
import { FiLock, FiPlay } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

interface Lesson {
  title: string;
  duration: string;
  preview?: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
  locked: boolean;
}

interface Props {
  sections: Section[];
  isEnrolled: boolean;
}

export default function CourseContent({ sections, isEnrolled }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Course Content</h2>

      <div className="space-y-3">
        {sections.map((section, index) => {
          const isLocked = !isEnrolled && section.locked;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              {/* Section Header */}
              <button
                onClick={() => !isLocked && toggleSection(index)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              >
                {/* Left Side */}
                <div className="flex items-center gap-2">
                  {isLocked ? (
                    <FiLock className="text-red-500" size={18} />
                  ) : (
                    <IoIosArrowDown
                      size={20}
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  <h3 className="font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </div>

                {/* Right Side — Lessons Count */}
                <span className="text-sm text-gray-500">
                  {section.lessons.length} Lessons
                </span>
              </button>

              {/* Lessons List */}
              {!isLocked && openIndex === index && (
                <div className="p-4 pt-0 space-y-3">
                  {section.lessons.map((lesson, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-2 pl-8 text-gray-700 border-b last:border-none"
                    >
                      <div className="flex items-center gap-2">
                        <FiPlay className="text-blue-600" size={16} />
                        <span>{lesson.title}</span>
                      </div>

                      <span className="text-sm text-gray-500">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
