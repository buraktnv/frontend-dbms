import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useBasketContext } from "../../helpers/contexts/BasketContext";
import Image from "next/image";

const index = () => {
  const basket = useBasketContext();

  const [loading, setLoading] = useState(false);

  const [basketItems, setBasketItems] = useState([...basket.basket]);
  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const myFunc = async () => {
    setBasketItems([]);
    setLoading(true);
    await timeout(1);
    setBasketItems([...basket.basket]);
    setLoading(false);
    console.log("basket:", basketItems);
  };

  useEffect(() => {
    myFunc();
  }, [basket.basket]);
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Sepet
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {loading ? (
                  <div className={`h-[${basket?.basket?.length}]`}></div>
                ) : basketItems.length == 0 ? (
                  <div className="font-semibold text-center text-gray-600">
                    Sepet Boş
                  </div>
                ) : (
                  basketItems.map((item, index) => {
                    return (
                      <CheckoutItem
                        key={index + Math.random * 10000}
                        content={item}
                      />
                    );
                  })
                )}
              </ul>

              <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>{basket?.basketTotal.prices}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                    >
                      Sepette Devam Et
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckoutItem = ({
  content = {
    id: 1,
    name: "T-Shirt",
    image:
      "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: 18.5,
    quantity: 3,
    color: "Kırmızı",
    size: "L",
  },
}) => {
  const [basketItem, setBasketItem] = useState(content);
  const basket = useBasketContext();

  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      mass: 1,
      friction: 60,
    },
  });

  const handleChange = (e) => {
    setBasketItem((pre) => {
      return { ...pre, quantity: e.target.value };
    });
    basket.updateItemCount({ ...basketItem, quantity: e.target.value });
  };
  return (
    <animated.li style={{ ...springs }} className="flex items-center">
      <div className="relative w-16 h-16">
        <Image
          src={content.image}
          alt=""
          fill
          className="object-cover w-16 h-16 rounded"
        />
      </div>

      <div className="ml-4">
        <h3 className="text-sm text-gray-900">{content.name}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Beden:</dt>
            <dd className="inline">{content.size}</dd>
          </div>

          <div>
            <dt className="inline">Renk:</dt>
            <dd className="inline">{content.color}</dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center justify-end flex-1 gap-2">
        <div>
          <label htmlFor="Line1Qty" className="sr-only">
            Quantity
          </label>

          <input
            type="number"
            min="1"
            value={content.quantity}
            id="Line1Qty"
            onChange={handleChange}
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <button
          className="text-gray-600 transition hover:text-red-600"
          onClick={() => basket.removeItemById(basketItem)}
        >
          <span className="sr-only">Remove item</span>

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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <div className="text-gray-600">{content.price * content.quantity}₺</div>
      </div>
    </animated.li>
  );
};

export default index;
