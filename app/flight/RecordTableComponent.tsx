"use client";

import { FaPen, FaTrash } from "react-icons/fa";

const RecordTableComponent = () => {
  // Retrieve data from local storage
  const retrievedStateStringified = localStorage.getItem("currentState");
  const retrievedStateArray = retrievedStateStringified
    ? JSON.parse(retrievedStateStringified).reverse()
    : [];

  return (
    <div className="overflow-x-auto ml-16">
      <table className="table custom-zebra table-lg text-light-text dark:text-dark-text">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>全席</th>
            <th>後席</th>
            <th>機体</th>
            <th>出発</th>
            <th>離脱</th>
            <th>到着</th>
            <th>編集/削除</th>
          </tr>
        </thead>
        {/* body */}
        <tbody className="text-lg">
          {retrievedStateArray.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.states.selectedStudent.name}</td>
              <td>{item.states.selectedCoach.name}</td>
              <td>{item.states.selectedGlider.name}</td>
              <td>{item.states.departureTime}</td>
              <td>{item.states.detatchInputValue}</td>
              <td>{item.states.arrivalTime}</td>
              <td className="flex flex-row gap-4 mt-1">
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
            <th>全席</th>
            <th>後席</th>
            <th>機体</th>
            <th>出発</th>
            <th>離脱</th>
            <th>到着</th>
            <th>編集/削除</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RecordTableComponent;
