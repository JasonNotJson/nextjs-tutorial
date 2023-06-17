import Link from "next/link";
import { dummyLessons } from "../consts/consts";
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

  return <div className="grid grid-cols-4 gap-10">{renderLessonCards()}</div>;
};

const LessonCardComponent = ({ lessonNum, context }: LessonCardProps) => (
  <div>
    <Link href={`/advice/${lessonNum}`}>
      <div className="lesson-number">Lesson {lessonNum}</div>
      <div className="lesson-context">{context}</div>
    </Link>
  </div>
);
export default LessonGridComponent;
