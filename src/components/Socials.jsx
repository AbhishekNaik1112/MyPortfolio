import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolling(scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      social: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AbhishekNaik1112",
      style: "rounded-tr-md bg-gray-700",
    },
    {
      id: 2,
      social: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/1211abhisheknaik/",
      style: "bg-blue-500",
    },
    {
      id: 3,
      social: (
        <>
          Leetcode <SiLeetcode size={30} />
        </>
      ),
      href: "#",
      style: "bg-orange-500",
    },
    {
      id: 4,
      social: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=abhisheknaik1112@gmail.com",
      style: "bg-gray-400",
    },
    {
      id: 5,
      social: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "#",
      style: "rounded-br-md bg-red-500",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, social, href, style, download, background }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-black " +
              " " +
              style +
              " " +
              background
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {social}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
