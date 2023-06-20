"use client";
import { students, coaches, gliders, gliderPort } from "@/consts/consts";
import { useState, useEffect } from "react";
import CustomCombobox from "./FlightComboBox";
import TimeButtonComponent from "./TimeButtonComponent";
import { FaCheck } from "react-icons/fa";

const PostFlightComponent = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [selectedGlider, setSelectedGlider] = useState("");

  const [studentQuery, setStudentQuery] = useState("");
  const [coachQuery, setCoachQuery] = useState("");
  const [gliderQuery, setGliderQuery] = useState("");

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [detatchInputValue, setDetatchInputValue] = useState("");

  const [selectedPort, setSelectedPort] = useState("");
  const [portQuery, setPortQuery] = useState("");

  const handleDepartureTimeChange = (newTime: string) => {
    console.log("handleDepartureTimeChange called with:", newTime);
    setDepartureTime(newTime);
  };

  useEffect(() => {
    console.log("departureTime changed:", departureTime);
  }, [departureTime]);

  const handleArrivalTimeChange = (newTime: string) => {
    console.log("handleArrivalTimeChange called with:", newTime);
    setArrivalTime(newTime);
  };
  console.log(departureTime);

  const handleInputChange = (event) => {
    setDetatchInputValue(event.target.value);
  };

  const packageState = (stateObject) => {
    return {
      id: stateObject ? stateObject.id + 1 : 1,
      states: {
        selectedStudent,
        selectedCoach,
        selectedGlider,
        departureTime,
        arrivalTime,
        detatchInputValue,
      },
    };
  };

  const addToLocalStorage = () => {
    const retrievedStateStringified = localStorage.getItem("currentState");
    let retrievedStateArray = retrievedStateStringified
      ? JSON.parse(retrievedStateStringified)
      : [];
    const lastStateObject =
      retrievedStateArray.length > 0
        ? retrievedStateArray[retrievedStateArray.length - 1]
        : null;
    const currentStateObject = packageState(lastStateObject);
    retrievedStateArray.push(currentStateObject);
    const updatedStateStringified = JSON.stringify(retrievedStateArray);
    localStorage.setItem("currentState", updatedStateStringified);
  };

  const clearLocalStorageDaily = () => {
    const lastClearedTime = localStorage.getItem("lastClearedTime");

    const currentTime = new Date().getTime();

    if (
      !lastClearedTime ||
      currentTime - lastClearedTime > 24 * 60 * 60 * 1000
    ) {
      localStorage.clear();
      localStorage.setItem("lastClearedTime", currentTime.toString());
    }
  };

  useEffect(() => {
    clearLocalStorageDaily();
  }, []);

  const isDataComplete = () => {
    return (
      selectedStudent !== "" &&
      selectedCoach !== "" &&
      selectedGlider !== "" &&
      departureTime !== "" &&
      arrivalTime !== "" &&
      detatchInputValue !== ""
    );
  };

  const handleButtonClick = () => {
    // Check if all data is filled
    if (isDataComplete()) {
      // If data is complete, add to local storage
      addToLocalStorage();
      window.location.reload();
    } else {
      // Optional: Show some message or alert to inform user that data is missing
      console.log("Data is missing");
    }
  };

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
    <div className="h-full">
      <div className="flex flex-col text-center items-center text-light-text dark:text-dark-text text-2xl md:text-6xl font-extrabold pl-16 mt-12 mb-6 p-2">
        <div className="mb-6">{formattedDate} 発航記録</div>
        <div className="flex items-center justify-center text-sm ml-16 z-40 font-normal ">
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
        <div className="text-center z-30 w-44 ">
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
        <div className="text-center z-20 w-44 ">
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
        <div className="z-10 w-36">
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
            className="w-16 py-1.5 px-3 mt-1 rounded-lg bg-primary-button border-white text-dark-text focus:ring-0"
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
            <button
              onClick={handleButtonClick}
              className="justify-center flex py-2.5 px-3 bg-primary-button rounded-lg flex-grow items-center hover:bg-secondary-accent text-dark-text"
            >
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFlightComponent;
