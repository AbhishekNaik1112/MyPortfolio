import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Ai from "../assets/ai.png";
import Pp from "../assets/pp.png";
import Ps from "../assets/ps.png";

const MyStack = () => {
  const stack = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-700",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: ReactJS,
      title: "React.JS",
      style: "shadow-sky-800",
      link: "https://react.dev/",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
      link: "https://tailwindcss.com/",
    },
    {
      id: 6,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
      link: "https://github.com/",
    },
    {
      id: 7,
      src: Ai,
      title: "Adobe Illustrator",
      style: "shadow-amber-600",
      link: "https://helpx.adobe.com/in/illustrator/user-guide.html",
    },
    {
      id: 8,
      src: Pp,
      title: "Adobe Premiere Pro",
      style: "shadow-purple-600",
      link: "https://helpx.adobe.com/in/premiere-pro/user-guide.html",
    },
    {
      id: 9,
      src: Ps,
      title: "Adobe Photoshop",
      style: "shadow-sky-800",
      link: "https://helpx.adobe.com/in/photoshop/user-guide.html",
    },
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="my stack"
      className=" bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black background-animate w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div className="mt-32">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            My Stack
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {stack.map(({ id, src, title, style, link }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                onClick={() => openLink(link)}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStack;
