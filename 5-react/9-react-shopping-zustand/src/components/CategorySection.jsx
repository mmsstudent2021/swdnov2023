import React from "react";
import CategoryButton from "./CategoryButton";
import { Container } from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();

  // console.log(categories);

  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className=" flex overflow-scroll category-button-group">
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
