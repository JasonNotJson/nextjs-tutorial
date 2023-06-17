import React from "react";
import { Notes } from "./components";

export const page = () => {
  return (
    <div className="overflow-x-auto text-black dark:text-white self-start">
      <Notes />
    </div>
  );
};

export default page;
