"use client";

import React from "react";
import {
  FormStatus,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";

export default function SubmitButton() {
  const { pending }: FormStatus = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-primary-button disabled:bg-gray-500 text-white p-2 m-2 rounded hover:bg-hover-button"
      // onClick={handleAddNote}
      type="submit"
    >
      　記入　
    </button>
  );
}
