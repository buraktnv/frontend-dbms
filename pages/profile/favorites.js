import React from "react";
import ProductCard from "../../components/shared/ProductCard";

const favorites = () => {
  return (
    <>
      <div className="p-4 pl-0 text-lg font-medium">Favorilerim</div>
      <div className="grid grid-cols-5 gap-4">
        {new Array(32).fill(0).map(() => (
          <ProductCard />
        ))}
      </div>
    </>
  );
};

export default favorites;
