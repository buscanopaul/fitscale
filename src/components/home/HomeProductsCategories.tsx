import React from "react";
import HomeProductsCategoriesCard from "./HomeProductsCategoriesCard";
import ProductsCategories from "../../mocks/productsCategories.json";

function HomeProductsCategories() {
  return (
    <div className="relative lg:hidden grid grid-cols-2 gap-4 mt-10">
      {ProductsCategories.map((productCategory) => (
        <HomeProductsCategoriesCard
          key={productCategory.id}
          data={productCategory}
        />
      ))}
    </div>
  );
}

export default HomeProductsCategories;
