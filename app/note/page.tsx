import React from "react";
import { NotesComponent } from "@/components";

export const page = () => {
  return (
    <div className="overflow-x-auto text-light-text dark:text-white self-start">
      <NotesComponent />
    </div>
  );
};

export default page;
