import { getDate } from "../../helpers/getDate";

function HeaderTasks() {
  const dateToday = getDate(new Date());

  return (
    <div className="flex w-full flex-col gap-4 p-4 text-white">
      <div className="flex h-[5rem] flex-col justify-center gap-1">
        <h1 className="py-1 text-4xl font-bold">Tareas</h1>
        <span className="text-[1rem] text-gray-400">{dateToday}</span>
      </div>
    </div>
  );
}

export default HeaderTasks;
