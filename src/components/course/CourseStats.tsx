import { IoTimeOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdVerified } from "react-icons/md";

interface CourseStatsProps {
  hours: number;
  projects: number;
  certificate?: boolean;
}

export default function CourseStats({
  hours,
  projects,
  certificate = true,
}: CourseStatsProps) {
  return (
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      {/* Duration */}
      <div className="bg-white rounded-xl shadow-sm px-6 py-4 border border-gray-100">
        <IoTimeOutline size={22} className="text-blue-600 mx-auto mb-2" />
        <p className="font-semibold text-gray-900">{hours}+ Hours</p>
        <p className="text-sm text-gray-500">On-demand video</p>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-xl shadow-sm px-6 py-4 border border-gray-100">
        <CgWebsite size={22} className="text-blue-600 mx-auto mb-2" />
        <p className="font-semibold text-gray-900">{projects} Projects</p>
        <p className="text-sm text-gray-500">Hands-on learning</p>
      </div>

      {/* Certification */}
      {certificate && (
        <div className="bg-white rounded-xl shadow-sm px-6 py-4 border border-gray-100">
          <MdVerified size={22} className="text-blue-600 mx-auto mb-2" />
          <p className="font-semibold text-gray-900">Certification</p>
          <p className="text-sm text-gray-500">Upon completion</p>
        </div>
      )}
    </div>
  );
}
