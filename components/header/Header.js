import React, { useState } from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import Basket from "./Basket";
import { useUserContext } from "../../helpers/contexts/UserContext";

const Header = () => {
  const [category, setCategory] = useState(null);
  const [basket, setBasket] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const user = useUserContext();

  const handleCategory = (newCategory) => {
    setCategory((pre) => (pre != newCategory ? newCategory : null));
  };

  console.log(category);

  const CloseBasket = () => setBasket(false);

  return (
    <div className="sticky inset-0 z-20 bg-white">
      <div className="relative">
        <header aria-label="Site Header" className="bg-white">
          <div className="flex items-center justify-center w-full h-16 gap-8">
            <Link
              className="block pr-6 text-sm font-semibold text-gray-600 hover:text-gray-600/75"
              href="/"
            >
              <span>ANASAYFA</span>
            </Link>

            <div className="flex items-center justify-between w-full">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <button
                      onClick={() => handleCategory("Woman")}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      KADIN
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleCategory("Man")}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      ERKEK
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleCategory("Kid")}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      ÇOCUK
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleCategory("Accessory")}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      GÜZELLİK ÜRÜNLERİ
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <span className="relative">
                  <button
                    onClick={() => setBasket((pre) => !pre)}
                    className="block p-4 hover:text-gray-600/75"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span className="sr-only">Cart</span>
                  </button>
                  {basket && (
                    <div className="absolute top-[100%] right-0 z-10">
                      <Basket CloseBasket={CloseBasket} />
                    </div>
                  )}
                </span>
                <span>
                  {user.user == null ? (
                    <Link
                      href="/auth/login"
                      className="block p-6 border-b-4 border-transparent hover:border-red-700"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="sr-only"> Account </span>
                    </Link>
                  ) : (
                    <button
                      className="relative"
                      onClick={() => setDropdown((pre) => !pre)}
                    >
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
                      <div className="absolute top-[100%] right-0">
                        {dropdown && <ProfileDropdown />}
                      </div>
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="absolute top-[100%] w-full bg-white z-10">
          {category &&
            (category == "Woman" ? (
              <Woman setCategory={setCategory} />
            ) : category == "Man" ? (
              <Man setCategory={setCategory} />
            ) : category == "Kid" ? (
              <Kid setCategory={setCategory} />
            ) : (
              <Accessory setCategory={setCategory} />
            ))}
        </div>
      </div>
    </div>
  );
};

function Woman({ setCategory }) {
  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div style={{ ...springs }}>
      <hr />
      <h3 className="px-3 py-2 text-xl font-bold text-gray-600">Kadın</h3>
      <ul className="grid justify-center grid-cols-6 py-4 mx-auto gap-y-3 child:capitalize child:text-gray-600 child:px-4 child-hover:underline child-hover:text-gray-600/75 child-hover:font-medium child:cursor-pointer">
        <Cate setCategory={setCategory} type="woman">
          Yeni Gelenler
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          çok satanlar
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          basic
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          kaban
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          ceket
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          blazer
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          yelek
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          elbise
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          triko
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          gömlek
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          top
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          tshirt
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          sweatshirt
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          pantolon
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          Jean
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          etek
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          takım
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          elbise
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          ayakkabı
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          çanta
        </Cate>
        <Cate setCategory={setCategory} type="woman">
          aksesuar
        </Cate>
      </ul>
      <hr />
    </animated.div>
  );
}
function Man({ setCategory }) {
  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div style={{ ...springs }}>
      <hr />
      <h3 className="px-3 py-2 text-xl font-bold text-gray-600">Erkek</h3>
      <ul className="grid justify-center grid-cols-6 py-4 mx-auto gap-y-3 child:capitalize child:text-gray-600 child:px-4 child-hover:underline child-hover:text-gray-600/75 child-hover:font-medium child:cursor-pointer">
        <Cate setCategory={setCategory} type="man">
          Basic
        </Cate>
        <Cate setCategory={setCategory} type="man">
          Mont
        </Cate>
        <Cate setCategory={setCategory} type="man">
          kaban
        </Cate>
        <Cate setCategory={setCategory} type="man">
          blazer
        </Cate>
        <Cate setCategory={setCategory} type="man">
          yelek
        </Cate>
        <Cate setCategory={setCategory} type="man">
          sweatshirt
        </Cate>
        <Cate setCategory={setCategory} type="man">
          kazak
        </Cate>
        <Cate setCategory={setCategory} type="man">
          pantolon
        </Cate>
        <Cate setCategory={setCategory} type="man">
          Jean
        </Cate>
        <Cate setCategory={setCategory} type="man">
          gömlek
        </Cate>
        <Cate setCategory={setCategory} type="man">
          tshirt
        </Cate>
        <Cate setCategory={setCategory} type="man">
          eşofman takım
        </Cate>
        <Cate setCategory={setCategory} type="man">
          ayakkabı
        </Cate>
        <Cate setCategory={setCategory} type="man">
          çanta
        </Cate>
      </ul>
      <hr />
    </animated.div>
  );
}

function Kid({ setCategory }) {
  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div style={{ ...springs }}>
      <hr />
      <div className="grid grid-cols-2 gap-4 py-2">
        <div>
          <h3 className="px-3 text-xl font-semibold text-gray-600">
            Kız Çocuk
          </h3>
          <ul className="grid justify-center grid-cols-4 py-4 mx-auto gap-y-3 child:capitalize child:text-gray-600 child:px-4 child-hover:underline child-hover:text-gray-600/75 child-hover:font-medium child:cursor-pointer">
            <Cate setCategory={setCategory} type="kid">
              0-6 Ay
            </Cate>
            <Cate setCategory={setCategory} type="kid">
              6 Ay - 5 Yaş
            </Cate>
            <Cate setCategory={setCategory} type="kid">
              6-14 Yaş
            </Cate>
          </ul>
        </div>
        <div>
          <h3 className="px-3 text-xl font-semibold text-gray-600">
            Erkek Çocuk
          </h3>
          <ul className="grid justify-center grid-cols-4 py-4 mx-auto transition-all gap-y-3 child:capitalize child:text-gray-600 child:px-4 child-hover:underline child-hover:text-gray-600/75 child-hover:font-medium child:cursor-pointer">
            <Cate setCategory={setCategory} type="kid">
              0-6 Ay
            </Cate>
            <Cate setCategory={setCategory} type="kid">
              6 Ay - 5 Yaş
            </Cate>
            <Cate setCategory={setCategory} type="kid">
              6-14 Yaş
            </Cate>
          </ul>
        </div>
      </div>
      <hr />
    </animated.div>
  );
}

const Cate = ({ type, children, setCategory }) => {
  console.log(type);
  return (
    <li
      className="flex items-center w-full gap-2 group"
      onClick={() => setCategory(null)}
    >
      <Link
        href={"/category/" + type + "/" + children.toLowerCase()}
        className="flex items-center w-full gap-2 group"
      >
        <div className="p-1 mt-0.5 rounded-full group-hover:bg-blue-600/75 transition-all"></div>
        {children}
      </Link>
    </li>
  );
};

function Accessory({ setCategory }) {
  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <>
      <animated.div style={{ ...springs }}>
        <hr />
        <h3 className="px-3 pt-2 text-xl font-bold text-gray-600">
          Güzellik Ürünleri
        </h3>
        <ul className="grid justify-center grid-cols-4 py-4 mx-auto gap-y-3 child:capitalize child:text-gray-600 child:px-4 child-hover:underline child-hover:text-gray-600/75 child-hover:font-medium child:cursor-pointer">
          <Cate setCategory={setCategory} type="accessory">
            parfüm
          </Cate>
          <Cate setCategory={setCategory} type="accessory">
            dudak
          </Cate>
          <Cate setCategory={setCategory} type="accessory">
            göz
          </Cate>
          <Cate setCategory={setCategory} type="accessory">
            yüz
          </Cate>
          <Cate setCategory={setCategory} type="accessory">
            oje
          </Cate>
          <Cate setCategory={setCategory} type="accessory">
            fırça
          </Cate>
        </ul>
        <hr />
      </animated.div>
    </>
  );
}

function ProfileDropdown() {
  const user = useUserContext();

  const springs = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <animated.div style={{ ...springs }}>
      <div className="inline-flex items-stretch text-left bg-white border rounded-md">
        <div className="relative">
          <div
            className="absolute right-0 z-10 w-56 origin-top-right border border-gray-100 rounded-md bg-gray-50"
            role="menu"
          >
            <div className="flow-root py-2">
              <div className="-my-2 divide-y divide-gray-100">
                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium text-gray-400 uppercase">
                    Profil
                  </strong>

                  <Link
                    href="/profile/favorites"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Favorilerim
                  </Link>

                  <Link
                    href="/profile/orders"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Siparişlerim
                  </Link>

                  <Link
                    href="/profile/wallet"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Cüzdanım
                  </Link>

                  <Link
                    href="/profile/address"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Adreslerim
                  </Link>

                  <Link
                    href="/profile/settings"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Ayarlar
                  </Link>
                </div>

                <div className="p-2">
                  <button
                    type="submit"
                    onClick={user.logout}
                    className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium text-red-700 rounded-lg hover:bg-red-50/75"
                    role="menuitem"
                  >
                    Çıkış
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Header;
