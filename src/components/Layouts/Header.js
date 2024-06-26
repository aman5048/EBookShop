import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
import { DropDownLogOut, DropDownLogin } from "../index";
import { useCart } from "../../context";

export const Header = (params) => {
  const { cartList } = useCart();
  const token = sessionStorage.getItem("token");
  const [darkMode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showSearch, setShowSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span
              onClick={() => setDarkmode(!darkMode)}
              className="cursor-pointer text-gray-700 text-xl dark:text-white bi bi-circle-half hover:scale-125 "
            ></span>
            <span
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer text-gray-700 text-xl dark:text-white bi bi-search hover:scale-125 "
            />
            <Link
              to={"/cart"}
              className="text-gray-700 dark:text-white mr-5 cursor-pointer"
            >
              <span className="text-2xl bi bi-cart relative hover:scale-125">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full hover:scale-125">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setShowDropDown(!showDropDown)}
              className="cursor-pointer text-gray-700 text-xl dark:text-white bi bi-person-circle hover:scale-125 "
            />

            {showDropDown && (
              <>
                {token ? (
                  <DropDownLogin setShowDropDown={setShowDropDown} />
                ) : (
                  <DropDownLogOut setShowDropDown={setShowDropDown} />
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};
