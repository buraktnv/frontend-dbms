import Image from "next/image";
import React, { useState } from "react";

const Product = ({
  content = {
    title: "Ürün Başlığı",
    price: "120.85₺",
    images: {
      main: "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      side: [
        "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      ],
    },
    colors: ["Kırmızı", "Beyaz", "Pembe", "Mor", "Siyah"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?",
  },
}) => {
  const [images, setImages] = useState({
    main: content.images.main,
    side: content.images.side,
  });

  const [color, setColor] = useState(null);

  const [size, setSize] = useState(null);

  console.log(size);

  return (
    <div>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="relative w-full h-96">
                <Image
                  fill
                  alt="Les Paul"
                  src={images.main}
                  className="object-cover w-full aspect-square rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                {images.side.map((src, index) => {
                  return (
                    <div
                      className="relative w-full h-64"
                      key={index + Math.random() * 10000}
                    >
                      <Image
                        fill
                        alt="Les Paul"
                        src={src}
                        className="object-cover w-full aspect-square rounded-xl"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sticky top-0">
              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{content.title}</h1>

                  {/* <p className="mt-0.5 text-sm">Highest Rated Product</p> */}

                  {/*    <div className="mt-2 -ml-0.5 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div> */}
                </div>

                <p className="text-lg font-bold">{content.price}</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{content.description}</p>
                    </div>

                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Daha <span className="group-open:hidden">Fazla</span>{" "}
                      <span className="hidden underline group-open:inline-block">
                        Az
                      </span>{" "}
                      Göster
                    </span>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>{content.description}</p>
                  <p>{content.description}</p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Renk</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      {content.colors.map((color, index) => {
                        return (
                          <label
                            htmlFor={color}
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="color"
                              id={color}
                              className="sr-only peer"
                              onChange={(e) => setColor(() => e.target.id)}
                            />

                            <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              {color}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Beden</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      {content.sizes.map((size, index) => {
                        return (
                          <label
                            htmlFor={"size_" + size}
                            key={Math.random() * 1000 + index}
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id={"size_" + size}
                              className="sr-only peer"
                              onChange={(e) => setSize(() => size)}
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              {size}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                <div className="flex mt-8">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value="1"
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
