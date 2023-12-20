import React from "react";
import { LuArrowRightToLine } from "react-icons/lu";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-red-900 to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-5xl sm:text-6xl font-bold text-center">
            Hi, My name is Abhishek Naik.
          </h2>
          <p className="text-white py-4 max-w-l text-center ">
            I am proficient in HTML, CSS, and JavaScript, and I'm currently
            expanding my skills by learning React.JS and Tailwind CSS.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-red-900 text-white items-center flex py-6 px-3 w-fit gap-1 my-2 rounded-md shadow-2xl hover:bg-red-700 scale-105 duration-300">
              Portfolio
              <span>
                <LuArrowRightToLine />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
