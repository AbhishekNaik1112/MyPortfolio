import React from "react";

const MyWork = () => {
  return (
    <div name="mywork" className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">My Work</p>
          <p>Some of my work that I made</p>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <button>Demo</button>
            <button>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;


