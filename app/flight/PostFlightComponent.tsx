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
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [detatchInputValue, setDetatchInputValue] = useState("");

  const dateInJapan = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  const japanDate = new Date(dateInJapan);

  // Format the date in YY-mm-dd
  const year = japanDate.getFullYear().toString().substr(-2);
  const month = String(japanDate.getMonth() + 1).padStart(2, "0");
  const day = String(japanDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const handleDepartureTimeChange = (newTime: string) => {
    setDepartureTime(newTime);
  };

  const handleArrivalTimeChange = (newTime: string) => {
    setArrivalTime(newTime);
  };

  const handleInputChange = (event) => {
    setDetatchInputValue(event.target.value);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col text-center text-light-text dark:text-dark-text text-6xl font-extrabold mt-12 mb-6 p-2">
        <div className="mb-6">{formattedDate} 発航記録</div>
        <div className="flex items-center justify-center text-sm ml-16 z-50 font-normal ">
          <div className="text-xl">滑空場　</div>
          <CustomCombobox
            selectedEntity={selectedPort}
            setSelectedEntity={setSelectedPort}
            items={gliderPort}
            filterQuery={portQuery}
            setFilterQuery={setPortQuery}
            placeholder="Select GP"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 text-light-text dark:text-dark-text w-auto ml-16 p-2">
        <div className="text-center z-40 w-44 ">
          <div>全席</div>
          <CustomCombobox
            selectedEntity={selectedStudent}
            setSelectedEntity={setSelectedStudent}
            items={students}
            filterQuery={studentQuery}
            setFilterQuery={setStudentQuery}
            placeholder="Select student"
          />
        </div>
        <div className="text-center z-30 w-44 ">
          後席
          <CustomCombobox
            selectedEntity={selectedCoach}
            setSelectedEntity={setSelectedCoach}
            items={coaches}
            filterQuery={coachQuery}
            setFilterQuery={setCoachQuery}
            placeholder="Select coach"
          />
        </div>
        <div className="z-20 w-36">
          <div className="text-center">機体</div>
          <CustomCombobox
            selectedEntity={selectedGlider}
            setSelectedEntity={setSelectedGlider}
            items={gliders}
            filterQuery={gliderQuery}
            setFilterQuery={setGliderQuery}
            placeholder="Select glider"
          />
        </div>
        <div className="text-center w-16">
          出発
          <TimeButtonComponent
            text="出発"
            onTimeChange={handleDepartureTimeChange}
          />
        </div>
        <div className="w-16 text-center">
          離脱
          <input
            type="text"
            className="w-16 py-1.5 px-3 mt-1 rounded-lg bg-primary-button"
            value={detatchInputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center w-16">
          到着
          <TimeButtonComponent
            text="到着"
            onTimeChange={handleArrivalTimeChange}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-grow"></div>
          <div className="flex">
            <button className="justify-center flex py-2.5 px-3 bg-primary-button rounded-lg flex-grow items-center hover:bg-hover-button">
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFlightComponent;
