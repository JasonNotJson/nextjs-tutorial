"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { Note } from "@/types";
import { dummyNotes } from "@/consts/consts";

export const addNote = async (data: FormData) => {
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
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  revalidatePath("/note");
};

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

export const onSubmit = async (data: FormData) => {
  console.log(data);
  addToLocalStorage(data);
  revalidatePath("/flight");
};
