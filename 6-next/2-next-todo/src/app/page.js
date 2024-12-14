import CreateForm from "@/components/CreateForm";
import Spinner from "@/components/Spinner";
import { lazy, Suspense } from "react";
const TaskListContainer = lazy(() => import("@/components/TaskListContainer"));

export default function Home() {
  return (
    <main className="p-10">
      <h1 className=" text-3xl font-bold mb-5 ">Todo App</h1>
      <CreateForm />
      <Suspense fallback={<Spinner />}>
        <TaskListContainer />
      </Suspense>
    </main>
  );
}
