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
    },
    {
      id: 2,
      src: SMcpp,
    },
    {
      id: 3,
      src: RpsWeb,
    },
    {
      id: 4,
      src: Rpscpp,
    },
    {
      id: 5,
      src: SnakeGame,
    },
    {
      id: 6,
      src: Bird,
    },
  ];

  return (
    <div
      name="mywork"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Work
          </p>
          <p className="py-6">Some of my work that I made</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {works.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6  m-4  hover:text-gray-500 scale-105 duration-300">
                  Demo
                </button>
                <button className="w-1/2 px-6  m-4  hover:text-gray-500 scale-105 duration-300">
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
