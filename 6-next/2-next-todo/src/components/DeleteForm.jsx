"use client";

import deleteTask from "@/actions/deleteTask";
import { useActionState } from "react";

const DeleteForm = ({ id }) => {
  const [state, formAction, isPending] = useActionState(deleteTask);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <button className=" text-red-700 underline">
        {isPending ? "Deleting ...." : "Delete"}
      </button>
    </form>
  );
};

export default DeleteForm;
