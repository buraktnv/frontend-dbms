import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useBasketContext } from "../../helpers/contexts/BasketContext";

const ProductCard = ({
  content = {
    id: "1",
    name: "Ürün Adı",
    image:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    price: "120₺",
    favorite: Math.round(Math.random()) == 1,
    size: "XXL",
    quantity: 1,
    color: "Mor",
  },
}) => {
  const { addItem } = useBasketContext();
  return (
    <div className="relative">
      <button
        onClick={() => alert("Begenme listesine ekle yapılacak.")}
        className="absolute right-4 top-4 z-[1] rounded-full bg-white p-1.5 text-gray-900 hover:text-gray-900/75 hover:scale-105 transition"
      >
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={content.favorite == true ? "rgb(230 38 38)" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <Link
        href={"/product/" + content.id}
        className="relative block overflow-hidden group"
      >
        <div className="relative w-full h-64 sm:h-72">
          <Image
            src={content.image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="relative p-6 bg-white border border-gray-100">
        {/* 
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            New
          </span> */}

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {content.name}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">{content.price}</p>

        <div className="mt-4">
          <button
            onClick={() => addItem(content)}
            className="block w-full p-4 text-sm font-medium text-white transition bg-orange-600 rounded hover:scale-105"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
