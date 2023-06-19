"use client";
import { students, coaches, gliders, gliderPort } from "@/consts/consts";
import { useState } from "react";
import CustomCombobox from "./FlightComboBox";
import TimeButtonComponent from "./TimeButtonComponent";
import { FaCheck } from "react-icons/fa";

const PostFlightComponent = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [selectedGlider, setSelectedGlider] = useState("");
  const [selectedPort, setSelectedPort] = useState("");
  const [studentQuery, setStudentQuery] = useState("");
  const [coachQuery, setCoachQuery] = useState("");
  const [gliderQuery, setGliderQuery] = useState("");
  const [portQuery, setPortQuery] = useState("");

  const dateInJapan = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  const japanDate = new Date(dateInJapan);

  // Format the date in YY-mm-dd
  const year = japanDate.getFullYear().toString().substr(-2);
  const month = String(japanDate.getMonth() + 1).padStart(2, "0");
  const day = String(japanDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="overflow-hidden ">
      <div className="flex flex-col text-center text-light-text dark:text-dark-text text-6xl font-extrabold mt-12 mb-6 p-2">
        <div className="mb-6">{formattedDate} 発航記録</div>
        <div className="flex items-center justify-center text-sm ml-16 z-20 font-normal ">
          <div className="text-xl">滑空場　</div>
          <CustomCombobox
            selectedEntity={selectedPort}
            setSelectedEntity={setSelectedPort}
            items={gliderPort}
            filterQuery={portQuery}
            setFilterQuery={setPortQuery}
            placeholder="Select a GP"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-light-text dark:text-dark-text w-full ml-16 p-2">
        <div className="text-center z-10">
          <div>全席</div>
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
        <div>
          <div className="text-center z-0">機体</div>
          <CustomCombobox
            selectedEntity={selectedGlider}
            setSelectedEntity={setSelectedGlider}
            items={gliders}
            filterQuery={gliderQuery}
            setFilterQuery={setGliderQuery}
            placeholder="Select a glider"
          />
        </div>
        <div>出発時間</div>
        <div>離脱高度</div>
        <div>到着時間</div>
        <div>
          <FaCheck />
        </div>
      </div>
      <div className="flex items-center justify-center ml-16">
        <TimeButtonComponent text="出発！" />
      </div>
    </div>
  );
};

export default PostFlightComponent;
