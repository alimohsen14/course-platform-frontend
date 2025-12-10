import { AiOutlineLock } from "react-icons/ai";

interface Props {
  price: number;
  onEnroll: () => void;
  onPayPerSection: () => void;
}

export default function CoursePaymentOptions({
  price,
  onEnroll,
  onPayPerSection,
}: Props) {
  return (
    <div className="bg-white w-full rounded-2xl shadow-md border border-gray-100 p-6 mt-8">
      {/* One Time Purchase */}
      <button
        onClick={onEnroll}
        className="w-full py-3 mb-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        One-Time Purchase - ${price}
      </button>

      {/* Pay Per Section */}
      <button
        onClick={onPayPerSection}
        className="w-full py-3 border border-gray-300 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        Pay Per Section
      </button>

      {/* Secure payment badge */}
      <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
        <AiOutlineLock size={14} /> Secure Payment with SSL
      </div>
    </div>
  );
}
