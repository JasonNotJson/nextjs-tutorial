"use client";

import React, { useState } from "react";
import {
  FormStatus,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";

export default function SubmitButton({
  addNote,
}: {
  addNote: (data: FormData) => Promise<void>;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (inputValue.trim() === "") {
      return;
    }

    const formData = new FormData();
    formData.append("body", inputValue);

    await addNote(formData); // Call the addNote function

    setInputValue(""); // Clear the input value
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        value={inputValue}
        onChange={handleChange}
        className="input input-bordered input-secondary w-3/4 bg-main-bg text-black dark:text-dark-text dark:bg-dark-main-bg"
        placeholder="Enter new note"
      />
      <button
        className="bg-primary-button text-white p-2 m-4 rounded hover:bg-hover-button"
        type="submit"
      >
        記入
      </button>
    </form>
  );
}
