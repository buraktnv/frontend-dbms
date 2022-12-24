import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const BasketContext = createContext({});

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const basketTotal = {
    prices:
      basket.length > 0
        ? basket.map((el) => el.price).reduce((prev, curr) => prev + curr, 0)
        : 0,
  };

  const addItem = (item) => {
    const newItem = { ...item, basket_id: Math.floor(Math.random() * 9999) };
    setBasket((prev) => [...prev, newItem]);
    toast.info("Ürün sepete eklendi.");
  };

  const removeItem = (item) => {
    setBasket((prev) => prev.filter((el) => el.basket_id !== item.basket_id));
    toast.info("Ürün sepetten silindi.");
  };

  const updateItemCount = (item) => {
    let items = [...basket];
    let itemIds = items.map((x) => x.basket_id);
    items[itemIds.indexOf(item.basket_id)] = item;
    setBasket(items);
  };

  const removeItemById = (item) => {
    setBasket((prev) => {
      const firstMatch = prev.filter((el) => el.id === item.id);
      if (firstMatch?.length > 0) {
        return prev.filter((el) => el.basket_id !== firstMatch[0].basket_id);
      } else {
        return prev;
      }
    });
    toast.info("Ürün sepetten silindi.");
  };

  const containsItemId = (item) => {
    const arr = basket.filter((el) => el.id === item.id);
    return arr.length;
  };

  const clearBasket = () => {
    setBasket([]);
    toast.info("Sepet boşaltıldı.");
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addItem,
        removeItem,
        removeItemById,
        clearBasket,
        basketTotal,
        containsItemId,
        updateItemCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => useContext(BasketContext);
