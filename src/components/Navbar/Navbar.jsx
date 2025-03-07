import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "HİZMETLER", link: "/hizmetlerimiz" },
  { id: 3, name: "ÜRÜNLER", link: "/urunler" },
  { id: 4, name: "REFERANSLAR", link: "/referanslar" },
  { id: 5, name: "HAKKIMIZDA", link: "/hakkimizda" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    navigate("/iletisim");
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-orange-500 text-3xl">
            engintasarım
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className={`text-xl font-medium py-2 px-3 rounded-lg transition-colors duration-300 cursor-pointer
                      ${location.pathname === link ? "text-primary border-b-2 border-primary" : "text-black dark:text-white hover:text-primary hover:border-b-2 hover:border-primary"}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <button
                onClick={handleClick}
                className="primary-btn font-medium text-lg"
              >
                İLETİŞİME GEÇ
              </button>
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;