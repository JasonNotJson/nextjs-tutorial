import React from "react";
import Link from "next/link";

type Props = {
  lessons: number;
};

const LessonGridComponent = ({ lessons }: Props) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= lessons; i++) {
      buttons.push(
        <Link href={`/advice/${i}`} key={i} className="btn">
          Lesson {i}
        </Link>
      );
    }
    return buttons;
  };

  return <div className="grid grid-cols-4">{renderButtons()}</div>;
};

export default LessonGridComponent;
