import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "my work",
    },
    {
      id: 4,
      link: "my stack",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="relative">
      <div className="blur-md absolute inset-1 h-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-900 background-animate"></div>

      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black fixed background-animate">
      
        <div>
          <h1 className="font-signature text-5xl ml-2 cursor-pointer">
            Abhishek
          </h1>
        </div>
        
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:text-red-600 scale-105 duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer  pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white background-animate">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className=" text-2xl px-4 cursor-pointer capitalize py-6 font-medium text-white hover:text-red-600 scale-105 duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
