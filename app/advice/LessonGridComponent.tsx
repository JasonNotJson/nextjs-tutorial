import Link from "next/link";
import { dummyLessons } from "@/consts/consts";
import { LessonCardProps } from "@/types";

const LessonGridComponent = () => {
  const renderLessonCards = () => {
    return dummyLessons.map((lesson) => (
      <LessonCardComponent
        key={lesson.lessonNum}
        lessonNum={lesson.lessonNum}
        context={lesson.context}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center mt-8 pt-8 justify-center">
      <div className="text-6xl text-center font-extrabold mb-4">
        レッスンアドバイス
        <div className="text-lg font-bold mt-6">新しいレッスンに進む部員へ</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 m-4 pl-16 p-6">
        {renderLessonCards()}
      </div>
    </div>
  );
};

const LessonCardComponent = ({ lessonNum, context }: LessonCardProps) => (
  <div className="card card-bordered card-compact bg-primary-button hover:bg-hover-button overflow-y-auto text-dark-text">
    <Link href={`/advice/${lessonNum}`}>
      <div className="card-title indent-5 mt-2">Lesson {lessonNum}</div>
      <div className="card-body text-sm">{context}</div>
    </Link>
  </div>
);
export default LessonGridComponent;
