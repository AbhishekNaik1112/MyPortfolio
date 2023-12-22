import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coder","Web Developer","Video Editor","Student"],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "|",
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
          <h2 className="text-white text-5xl sm:text-6xl font-bold text-center">
            Hi, My name is Abhishek Naik.
          </h2>
          <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mt-1 py-1">
            {/* "Coder","Web Developer","Video Editor","Student" */}
            <span ref={el}></span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
