"use client";

import createTask from "@/actions/createTask";
import React, { useActionState } from "react";

const CreateForm = () => {
  const [state, formAction, isPending] = useActionState(createTask);
  return (
    <form action={formAction}>
      <div className=" flex justify-center items-center mb-3">
        <input
          name="title"
          className=" grow border border-black p-3"
          type="text"
          required
        />
        <button
          disabled={isPending}
          className="border disabled:opacity-80 border-black py-3 px-6 bg-black text-white"
        >
          {isPending ? "Saving ...." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
