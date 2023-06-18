// import React, { useState } from "react";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "./SubmitButton";

interface Note {
  userId: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  noteId: string;
}

const dummyNotes: Note[] = [
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
];

const NotesComponent = () => {
  const addNote = async (data: FormData) => {
    "use server";
    // Extract the relevant properties from the FormData object

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userId = "1";
    const body = data.get("body") as string;
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    const userName = "パク";
    const noteId = uuidv4();

    // Construct a new note object
    const newNote: Note = {
      userId,
      body,
      createdAt,
      updatedAt,
      userName,
      noteId,
    };

    // Add the new note to the dummyNotes array
    dummyNotes.push(newNote);

    dummyNotes.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    revalidatePath("/note");
  };

  return (
    <div className="mt-12 ml-16">
      <div className="justify-center text-center text-6xl font-extrabold mb-4">
        やらかしノート
        <div className="text-lg font-bold m-2">
          限りなく軽いやらかしまでの記録
        </div>
      </div>
      <div className="mb-4 items-center justify-center">
        <form action={addNote}>
          <input
            type="text"
            name="body"
            className="input input-bordered input-secondary w-3/4 bg-main-bg text-black dark:text-dark-text dark:bg-dark-main-bg"
            placeholder="Enter new note"
            // value={inputVal}
            // onChange={(e) => setInputVal(e.target.value)}
          />
          <SubmitButton />
        </form>
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
