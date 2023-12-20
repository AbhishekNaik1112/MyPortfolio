import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coder", "Web Developer", "Video Editor", "Student"],
      startDelay: 150,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-red-900 to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-5xl sm:text-6xl font-bold text-center animate-bounce">
            Hi, My name is Abhishek Naik.
          </h2>
          <p className="text-white py-4 max-w-l text-center text-3xl ">
            <span ref={el}></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
