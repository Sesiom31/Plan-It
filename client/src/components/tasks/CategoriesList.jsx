import CategoryCard from "./CategoryCard";
import { categoriesTask } from "../../data/categoriesTask";

function CategoriesList() {
  const content = categoriesTask.map((category) => (
    <CategoryCard key="name" category={category} />
  ));

  return (
    <nav className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-6">
      {content}
    </nav>
  );
}

export default CategoriesList;
