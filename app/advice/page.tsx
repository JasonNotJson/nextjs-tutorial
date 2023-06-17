import React from "react";
import { LessonGridComponent } from "./components";

const advice = () => {
  return (
    <div className="overflow-hidden">
      <LessonGridComponent lessons={26} />
    </div>
  );
};

export default advice;
