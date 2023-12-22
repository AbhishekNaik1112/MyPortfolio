import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const links = [
    {
      id: 1,
      social: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AbhishekNaik1112",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      social: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/1211abhisheknaik/",
    },
    {
      id: 3,
      social: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=abhisheknaik1112@gmail.com",
    },
    {
      id: 4,
      social: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "#",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, social, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-800" +
              " " +
              style
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
