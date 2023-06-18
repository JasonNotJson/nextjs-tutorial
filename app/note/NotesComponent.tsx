// import React, { useState } from "react";
import { dummyNotes } from "@/consts/consts";
import { revalidatePath } from "next/cache";
import SubmitButton from "./SubmitButton";
import { v4 as uuidv4 } from "uuid";
import { Note } from "@/types";

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
