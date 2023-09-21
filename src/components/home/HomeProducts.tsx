import React from "react";
import Products from "../../mocks/products.json";
import HomeProductsCard from "./HomeProductsCard";

function HomeProducts() {
  return (
    <div className="text-white grid grid-cols-2 gap-4 mt-20 lg:mt-10 lg:w-1/2">
      {Products.map((product) => (
        <HomeProductsCard data={product} key={product.id} />
      ))}
    </div>
  );
}

export default HomeProducts;
