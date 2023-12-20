import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
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
          <h2 className="text-white text-xl sm:text-5xl font-bold text-center mt-1 py-1">
            Coder,Web Developer,Video Editor,Student
          </h2>
          <h2 className="text-white text-3xl sm:text-5xl font-bold text-center mt-1 py-1">
            based in Karnataka,India
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
