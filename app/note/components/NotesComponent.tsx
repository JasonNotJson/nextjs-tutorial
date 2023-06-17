"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  // Dummy data
  // const dummyNotes = [
  //   {
  //     userId: "1",
  //     body: "学年ミーティングの途中間違ってズームを消してしまった。",
  //     createdAt: "2023-06-15T00:00:00.000Z",
  //     updatedAt: "2023-06-15T00:00:00.000Z",
  //     userName: "パク",
  //     noteId: "12315415124131231231",
  //   },
  //   {
  //     userId: "1",
  //     body: "学年ミーティングの途中間違ってズームを消してしまった。",
  //     createdAt: "2023-06-15T00:00:00.000Z",
  //     updatedAt: "2023-06-15T00:00:00.000Z",
  //     userName: "パク",
  //     noteId: "12451318i0989089009790",
  //   },
  // ];

  const [inputVal, setInputVal] = useState("");
  const [notes, setNotes] = useState([
    {
      userId: "1",
      body: "学年ミーティングの途中間違ってズームを消してしまった。",
      createdAt: "2023-06-15T00:00:00.000Z",
      updatedAt: "2023-06-15T00:00:00.000Z",
      userName: "パク",
      noteId: "12315415124131231231",
    },
    {
      userId: "1",
      body: "学年ミーティングの途中間違ってズームを消してしまった。",
      createdAt: "2023-06-15T00:00:00.000Z",
      updatedAt: "2023-06-15T00:00:00.000Z",
      userName: "パク",
      noteId: "12451318i0989089009790",
    },
  ]);

  const handleAddNote = () => {
    if (inputVal.trim()) {
      const newNote = {
        userId: "4",
        body: inputVal,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userName: "パク",
        noteId: uuidv4(),
      };

      setNotes((prevNotes) => [newNote, ...prevNotes]);
      setInputVal("");
    }
  };

  notes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  console.log(notes[0].noteId);

  return (
    <div className="mt-12 ml-16">
      <div className="justify-center text-center text-4xl font-extrabold mb-4">
        やらかしノート
      </div>
      <div className="text-lg m-2">限りなく軽いやらかしを記録する欄です</div>
      <div className="mb-4 items-center justify-center">
        <input
          type="text"
          className="input input-bordered input-secondary w-3/4 bg-main-bg text-black dark:text-white dark:bg-main-dark-bg"
          placeholder="Enter new note"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="bg-primary-button text-white p-2 m-2 rounded hover:bg-hover-button"
          onClick={handleAddNote}
        >
          　記入　
        </button>
      </div>
      <table className="table table-xs md:table-lg ">
        {/* head */}
        <thead>
          <tr>
            <th className="text-black dark:text-white">ユーザー名</th>
            <th className="text-black dark:text-white">ノート</th>
            <th className="text-black dark:text-white">記入日</th>
          </tr>
        </thead>
        <tbody className="custom-zebra">
          {notes.map((note, index) => (
            <tr key={index}>
              <td>{note.userName}</td>
              <td>{note.body}</td>
              <td>{new Date(note.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;
