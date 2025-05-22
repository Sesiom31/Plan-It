import { useOutletContext, useSearchParams } from "react-router-dom";

import CategoriesOptions from "./CategoriesOptions";
import DisplayTasks from "./DisplayTasks";
import { useEffect } from "react";

function TasksHome() {
  console.log("TasksHome");
  const [searchParam, setSearchParam] = useSearchParams();

  const categories = useOutletContext();
  console.log({ categories });
  const validsCategories = categories?.map((category) => category.name);

  console.log(categories);

  useEffect(() => {
    const paramCategory = searchParam.get("category");

    if (!paramCategory || !validsCategories.includes(paramCategory)) {
      setSearchParam({ category: "hoy" });
    }
  }, [searchParam, setSearchParam, validsCategories]);

  return (
    <div className="relative h-full max-h-[calc(100%-0.2rem)] w-full">
      <CategoriesOptions categories={categories} />
      <DisplayTasks />
    </div>
  );
}

export default TasksHome;
