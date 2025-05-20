import HeaderTasks from "../components/tasks/HeaderTasks";
import { Outlet } from "react-router-dom";

function TasksPage() {
  return (
    <section className="h-full">
      <div className="h-full max-h-full w-full">
        <HeaderTasks />

        <div className="h-auto w-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default TasksPage;
