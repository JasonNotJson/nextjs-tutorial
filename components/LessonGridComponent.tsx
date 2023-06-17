import Link from "next/link";
import { dummyLessons } from "../consts/consts";

const LessonGridComponent = () => {
  const renderButtons = () => {
    return dummyLessons.map((lesson) => (
      <Link
        href={`/advice/${lesson.lessonNum}`}
        key={lesson.lessonNum}
        className="btn"
      >
        Lesson {lesson.lessonNum}
      </Link>
    ));
  };

  return <div className="grid grid-cols-4 gap-10">{renderButtons()}</div>;
};

export default LessonGridComponent;
