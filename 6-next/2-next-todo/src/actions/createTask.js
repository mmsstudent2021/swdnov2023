"use server";

import { revalidateTag } from "next/cache";

const createTask = async (currentState, formData) => {
  const title = formData.get("title");
  const res = await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      is_done: false,
      create_at: new Date().toISOString(),
    }),
  });
  if (res.ok) {
    const json = await res.json();
    revalidateTag("tasks");
    return json;
  } else {
    return res.statusText;
  }
};

export default createTask;
