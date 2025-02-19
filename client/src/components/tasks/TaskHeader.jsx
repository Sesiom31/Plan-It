import MenuCategories from "./MenuCategories";
import { getDate } from "../../helpers/getDate";

function TaskHeader() {
  const dateToday = getDate(new Date());

  return (
    <div className="flex w-full flex-col gap-4 p-4 text-gris-oscuro">
      <div className="h-16">
        <h1 className="text-4xl font-bold">Tareas</h1>
        <span className="text-[0.9rem] text-gris-text">{dateToday}</span>
      </div>

      <div className="h-8">
        <MenuCategories />
      </div>
      <div></div>
    </div>
  );
}

export default TaskHeader;
