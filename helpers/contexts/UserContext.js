import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [localUser, setLocalUser] = useLocalStorage("e-commerce-user");

  useEffect(() => {
    setUser(localUser);
  }, []);

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const login = (user) => {
    setUser(user);
    toast.success("Giriş Yapıldı.");
  };

  const addFavoriteItem = (product) => {
    setFavorites((pre) => [...pre, product]);
    toast.info("Ürün favorilerinize eklendi.", { autoClose: 3000 });
  };

  const deleteFavoriteItem = (product) => {
    setFavorites((prev) =>
      prev.filter((el) => el.basket_id !== item.basket_id)
    );
    toast.info("Ürün favorilerinizden çıkarıldı.", { autoClose: 3000 });
  };

  const logout = () => {
    setUser(null);
    setLocalUser(null);
    toast.info("Çıkış Yapıldı.");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
