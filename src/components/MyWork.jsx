import React from "react";
import RpsWeb from "../assets/rpsweb.png";
import Rpscpp from "../assets/rpsc++.png";
import Bird from "../assets/birdshooter.png";
import SMcpp from "../assets/Studentmanagec++.png";
import FoodWeb from "../assets/foodweb.png";
import SnakeGame from "../assets/snake.png";
const MyWork = () => {
  const works = [
    {
      id: 1,
      src: FoodWeb,
      repolink: "https://github.com/AbhishekNaik1112/Food-Recipe-Website",
      demolink: "#",
    },
    {
      id: 2,
      src: SMcpp,
      repolink:
        "https://github.com/AbhishekNaik1112/Student-Management-System-CPP",
      demolink: "#",
    },
    {
      id: 3,
      src: RpsWeb,
      repolink:
        "https://github.com/AbhishekNaik1112/Project_Rock_Paper_Scissors_Functional",
      demolink: "#",
    },
    {
      id: 4,
      src: Rpscpp,
      repolink: "https://github.com/AbhishekNaik1112/Rock-Paper-Scissors-CPP",
      demolink: "#",
    },
    {
      id: 5,
      src: SnakeGame,
      repolink: "https://github.com/AbhishekNaik1112/Project_Snake_Game",
      demolink: "#",
    },
    {
      id: 6,
      src: Bird,
      repolink: "https://github.com/AbhishekNaik1112/Bird-Shooter-Game",
      demolink: "#",
    },
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="my work"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full text-white md:h-screen background-animate"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            My Work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-12 sm:px-0">
          {works.map(({ id, src, repolink, demolink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openLink(demolink)}
                  className="w-1/2 px-6  m-4  hover:text-red-600 scale-105 duration-300"
                >
                  Demo
                </button>
                <button
                  onClick={() => openLink(repolink)}
                  className="w-1/2 px-6  m-4  hover:text-red-600 scale-105 duration-300"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
