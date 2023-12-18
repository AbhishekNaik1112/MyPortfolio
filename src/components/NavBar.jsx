import React from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
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
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-red-600 bg-black fixed">
      <div>
        <h1 className="font-signature text-5xl ml-2">Abhishek</h1>
      </div>
      <ul className="flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
