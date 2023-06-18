import React from "react";
import NotesComponent from "./NotesComponent";

export const note = () => {
  return (
    <div className="overflow-x-auto text-light-text dark:text-white self-start">
      <NotesComponent />
    </div>
  );
};

export default note;
