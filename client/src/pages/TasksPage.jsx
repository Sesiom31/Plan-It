import AddTaskButton from "../components/tasks/AddTaskButton";
import FormAddTask from "../components/tasks/FormAddTask";
import TaskHeader from "../components/tasks/TaskHeader";
import { useState } from "react";

function TasksPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="h-full">
      <div className="h-full">
        <TaskHeader />
        <div className="w-full">
          <AddTaskButton onChangeShowForm={setShowForm} />
          <FormAddTask onChangeShowForm={setShowForm} showForm={showForm} />
        </div>
      </div>
    </section>
  );
}

export default TasksPage;
