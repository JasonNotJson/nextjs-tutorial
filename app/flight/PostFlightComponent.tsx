"use client";
import { students, coaches, gliders, gliderPort } from "@/consts/consts";
import { useState, useEffect } from "react";
import CustomCombobox from "./FlightComboBox";
import TimeButtonComponent from "./TimeButtonComponent";
import { useForm, Controller } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { DevTool } from "@hookform/devtools";

const PostFlightComponent = () => {
  const form = useForm();
  const { register, handleSubmit, setValue, control } = form;
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const resetAtMidnight = () => {
    const now = new Date();
    const night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // the next day, ...
      0,
      0,
      0 // ...at 00:00:00 hours
    );
    const msToMidnight = night.getTime() - now.getTime();

    setTimeout(() => {
      setIsSubmitted(false);
      localStorage.setItem("isSubmitted", "false");
    }, msToMidnight);
  };
  useEffect(() => {
    resetAtMidnight();
    clearLocalStorageDaily();

    const isSubmitted = localStorage.getItem("isSubmitted");
    setIsSubmitted(isSubmitted === "true");
  }, []);

  const onSubmitPort = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    localStorage.setItem("Port", data.Port.name);
    localStorage.setItem("isSubmitted", "true");
  };

  const dateInJapan = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  const japanDate = new Date(dateInJapan);
  const year = japanDate.getFullYear().toString().substr(-2);
  const month = String(japanDate.getMonth() + 1).padStart(2, "0");
  const day = String(japanDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const port = localStorage.getItem("Port");
  const hours = String(japanDate.getHours()).padStart(2, "0");
  const minutes = String(japanDate.getMinutes()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  const addToLocalStorage = (data: FormData) => {
    const retrievedStateStringified = localStorage.getItem("flightRecord");
    let retrievedStateArray = retrievedStateStringified
      ? JSON.parse(retrievedStateStringified)
      : [];
    const currentStateObject = {
      id:
        retrievedStateArray.length > 0
          ? retrievedStateArray[retrievedStateArray.length - 1].id + 1
          : 1,
      states: data,
    };
    retrievedStateArray.push(currentStateObject);
    const updatedStateStringified = JSON.stringify(retrievedStateArray);
    localStorage.setItem("flightRecord", updatedStateStringified);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    addToLocalStorage(data);
    window.location.reload();
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row text-center items-center text-light-text dark:text-dark-text text-2xl md:text-6xl font-extrabold pl-16 mt-12 mb-6 p-2">
          <div className="mb-6">{formattedDate} 発航記録</div>
          <div className="flex flex-row items-center justify-center text-sm z-40 font-normal ml-4">
            <div className="text-xl">滑空場 : </div>
            <form
              onSubmit={handleSubmit(onSubmitPort)}
              className="flex items-center"
            >
              {isSubmitted && port ? (
                <div className="flex items-center justify-center text-xl font-normal ml-2">
                  {port}
                </div>
              ) : (
                <Controller
                  name="Port"
                  control={control}
                  render={({ field }) => (
                    <CustomCombobox
                      selectedEntity={selectedPort}
                      setSelectedEntity={(value) => {
                        field.onChange(value);
                        setSelectedPort(value);
                      }}
                      items={gliderPort}
                      filterQuery={portQuery}
                      setFilterQuery={setPortQuery}
                      placeholder="Select GP"
                    />
                  )}
                />
              )}
              {!isSubmitted && (
                <button
                  type="submit"
                  className="flex py-[10px] mt-1 ml-1 px-3 bg-primary-button rounded-lg flex-grow items-center hover:bg-secondary-accent text-dark-text"
                >
                  <FaCheck />
                </button>
              )}
            </form>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center md:flex-row gap-4 text-light-text dark:text-dark-text w-auto ml-16 p-2">
            <div className="text-center z-30 w-44 ">
              <div>前席</div>
              <Controller
                name="student"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomCombobox
                    selectedEntity={selectedStudent}
                    setSelectedEntity={(value) => {
                      field.onChange(value);
                      setSelectedStudent(value);
                    }}
                    items={students}
                    filterQuery={studentQuery}
                    setFilterQuery={setStudentQuery}
                    placeholder="Select Student"
                  />
                )}
              />
            </div>
            <div className="text-center z-20 w-44 ">
              後席
              <Controller
                name="coach"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomCombobox
                    selectedEntity={selectedCoach}
                    setSelectedEntity={(value) => {
                      field.onChange(value);
                      setSelectedCoach(value);
                    }}
                    items={coaches}
                    filterQuery={coachQuery}
                    setFilterQuery={setCoachQuery}
                    placeholder="Select Coach"
                  />
                )}
              />
            </div>
            <div className="z-10 w-36">
              <div className="text-center">機体</div>
              <Controller
                name="glider"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomCombobox
                    selectedEntity={selectedGlider}
                    setSelectedEntity={(value) => {
                      field.onChange(value);
                      setSelectedGlider(value);
                    }}
                    items={gliders}
                    filterQuery={gliderQuery}
                    setFilterQuery={setGliderQuery}
                    placeholder="Select Glider"
                  />
                )}
              />
            </div>
            <input
              type="hidden"
              {...register("deptTime")}
              value={formattedTime}
            />

            <div className="flex flex-col">
              <div className="flex-grow"></div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex py-4 px-4 bg-primary-button rounded-full flex-grow items-center hover:bg-secondary-accent text-dark-text"
                >
                  出発！
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <DevTool control={control} />
    </div>
  );
};

export default PostFlightComponent;
