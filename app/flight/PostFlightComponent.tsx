"use client";
import { students, coaches } from "@/consts/consts";
import { useState } from "react";
import CustomCombobox from "@/app/flight/FlightComboBox";
import { FaCheck } from "react-icons/fa";

const PostFlightComponent = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [studentQuery, setStudentQuery] = useState("");
  const [coachQuery, setCoachQuery] = useState("");

  return (
    <div className="self-start h-screen overflow-hidden ">
      <div className="flex flex-col text-center text-light-text dark:text-dark-text text-6xl font-extrabold mt-12 mb-6 p-2">
        発航記録
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-light-text dark:text-dark-text w-full ml-16 p-2">
        <div className="text-center z-10">
          全席
          <CustomCombobox
            selectedEntity={selectedStudent}
            setSelectedEntity={setSelectedStudent}
            items={students}
            filterQuery={studentQuery}
            setFilterQuery={setStudentQuery}
            placeholder="Select a student"
          />
        </div>
        <div className="text-center z-0">
          後席
          <CustomCombobox
            selectedEntity={selectedCoach}
            setSelectedEntity={setSelectedCoach}
            items={coaches}
            filterQuery={coachQuery}
            setFilterQuery={setCoachQuery}
            placeholder="Select a coach"
          />
        </div>
        <div>機体</div>
        <div>出発時間</div>
        <div>離脱高度</div>
        <div>到着時間</div>
        <div>
          <FaCheck />
        </div>
      </div>
    </div>
  );
};

export default PostFlightComponent;
