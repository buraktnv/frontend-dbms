import { useRouter } from "next/router";
import React from "react";
import ProductPage from "../../components/shared/ProductPage";

const Product = ({ content = {} }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("val", id);
  return (
    <div>
      <ProductPage /> {id}
    </div>
  );
};

export default Product;
