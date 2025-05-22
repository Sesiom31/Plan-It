import Loading from "../ui/Loading";
import { Outlet } from "react-router-dom";
import { useGetCategoriesQuery } from "../services/api";

function TasksPage() {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <Loading />;
  console.log(categories);

  return (
    <section className="h-full">
      <div className="h-full max-h-full w-full">
        <Outlet context={categories.categories} />
      </div>
    </section>
  );
}

export default TasksPage;
