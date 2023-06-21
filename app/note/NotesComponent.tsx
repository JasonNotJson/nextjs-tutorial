// import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { addNote } from "../_actions";
import { dummyNotes } from "@/consts/consts";

const NotesComponent = () => {
  return (
    <div className="mt-12 ml-16">
      <div className="justify-center text-center text-6xl font-extrabold mb-4">
        やらかしノート
        <div className="text-lg font-bold m-2">
          限りなく軽いやらかしまでの記録
        </div>
      </div>
      <div className="mb-4 items-center justify-center">
        <SubmitButton addNote={addNote} />
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
          {dummyNotes.map((note, index) => (
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

export default NotesComponent;
