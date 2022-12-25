import React, { useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../../components/shared/ProductCard";
import SelectFilter from "../../../components/shared/SelectFilter";
import Link from "next/link";

const Category = () => {
  const router = useRouter();
  const { type, category } = router.query;

  const [desc, setDesc] = useState("Title, DESC");

  const [price, setPrice] = useState({
    min: null,
    maks: null,
  });

  const header =
    type == "woman"
      ? "Kadın"
      : type == "man"
      ? "Erkek"
      : type == "kid"
      ? "Çocuk"
      : "Güzellik Ürünleri";
  const kategori = category == "all" ? "Tüm Ürünler" : category;

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <header className="flex items-end gap-2">
          <h2 className="text-3xl font-bold text-gray-700 capitalize select-none">
            <Link href={"/category/" + type + "/all"}>{header}</Link> {" > "}{" "}
            {kategori}
          </h2>
        </header>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="relative space-y-4 lg:block">
            <div>
              <label
                htmlFor="search"
                className="block text-xs font-medium text-gray-700"
              >
                Arama
              </label>
              <div className="relative flex w-full text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute w-5 h-5 select-none left-2 top-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Ara"
                  className="w-full py-2 pr-2 border border-r-0 border-gray-300 rounded-l outline-none appearance-none pl-9 peer"
                />
                <button className="px-4 py-2 font-medium border border-gray-300 rounded-r hover:bg-gray-100">
                  Ara
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="SortBy"
                className="block text-xs font-medium text-gray-700"
              >
                Sırala
              </label>
              <div className="relative w-full">
                <span className="absolute z-20 transition group-open:-rotate-180 right-4 top-5"></span>
                <select
                  id="SortBy"
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-4 py-3 mt-1 text-sm border border-gray-300 rounded outline-none appearance-none"
                >
                  <option>Sırala</option>
                  <option value="Title, DESC">İsme Göre A-Z</option>
                  <option value="Title, ASC">İsme Göre Z-A</option>
                  <option value="Price, DESC">Fiyat Artan</option>
                  <option value="Price, ASC">Fiyat Azalan</option>
                </select>
              </div>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">
                Filtreler
              </p>

              <div className="mt-1 space-y-2">
                <SelectFilter
                  content={{
                    title: "Kategori",
                    options: [
                      "Kategori 1",
                      "Kategori 2",
                      "Kategori 3",
                      "Kategori 4 ",
                      "Kategori 5",
                      "Kategori 6",
                    ],
                    max: 3,
                  }}
                />

                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span className="text-sm font-medium"> Fiyat </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="bg-white border-t border-gray-200">
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex justify-between gap-4">
                        <label
                          htmlFor="FilterPriceFrom"
                          className="flex items-center gap-2"
                        >
                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="Minimum"
                            onChange={(e) =>
                              setPrice((pre) => {
                                return { ...pre, min: e.target.value };
                              })
                            }
                            className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                          />
                          <span className="text-sm text-gray-600">₺</span>
                        </label>

                        <label
                          htmlFor="FilterPriceTo"
                          className="flex items-center gap-2"
                        >
                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="Maksimum"
                            onChange={(e) =>
                              setPrice((pre) => {
                                return { ...pre, maks: e.target.value };
                              })
                            }
                            className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                          />
                          <span className="text-sm text-gray-600">₺</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </details>
                <SelectFilter
                  content={{
                    title: "Beden",
                    options: ["S", "M", "L", "XL", "XXL", "3XL"],
                    max: 3,
                  }}
                />

                <SelectFilter />
                <button className="w-full px-3 py-2.5 text-lg font-semibold text-center text-white bg-orange-500 rounded-md">
                  Filtrele
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 col-span-3 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
