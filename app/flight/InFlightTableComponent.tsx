"use client";

import { FaPen, FaTrash } from "react-icons/fa";
import TimeButtonComponent from "./TimeButtonComponent";
import { useState } from "react";

const InFlightTableComponent = () => {
  // Retrieve data from local storage

  const [arrivalTime, setArrivalTime] = useState("");

  const handleArrivalTimeChange = (newTime: string) => {
    console.log("handleArrivalTimeChange called with:", newTime);
    setArrivalTime(newTime);
  };
  const retrievedStateStringified = localStorage.getItem("flightRecord");
  const retrievedStateArray = retrievedStateStringified
    ? JSON.parse(retrievedStateStringified).reverse()
    : [];

  return (
    <div className="overflow-x-auto ">
      <table className="table custom-zebra table-lg text-light-text dark:text-dark-text">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>前席</th>
            <th>後席</th>
            <th>機体</th>
            <th>出発</th>
            <th>離脱</th>
            <th className="text-center">到着</th>
            <th>編集/削除</th>
          </tr>
        </thead>
        {/* body */}
        <tbody className="text-lg">
          {retrievedStateArray.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.states.student.name}</td>
              <td>{item.states.coach.name}</td>
              <td>{item.states.glider.name}</td>
              <td>{item.states.deptTime}</td>
              <td></td>
              {/* <td>{item.states.arrivalTime}</td> */}
              <td>
                <div className="w-16 text-center">
                  <TimeButtonComponent
                    text="到着"
                    onTimeChange={handleArrivalTimeChange}
                  />
                </div>
              </td>
              <td className="flex flex-row gap-4 mt-3">
                <button>
                  <FaPen />
                </button>
                <button>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>前席</th>
            <th>後席</th>
            <th>機体</th>
            <th>出発</th>
            <th>離脱</th>
            <th className="text-center">到着</th>
            <th>編集/削除</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InFlightTableComponent;
