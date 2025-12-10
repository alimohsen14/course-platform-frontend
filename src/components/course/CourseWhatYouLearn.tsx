import { MdCheckCircle } from "react-icons/md";

interface LearnItem {
  text: string;
}

interface Props {
  items: LearnItem[];
}

export default function CourseWhatYouLearn({ items }: Props) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        What you'll learn
      </h2>

      <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <MdCheckCircle size={20} className="text-blue-600 mt-1" />
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
