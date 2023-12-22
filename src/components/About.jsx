import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div>
        <p className="text-xl mt-20">
          Passionate about the dynamic realm of software development, I am
          currently immersed in a transformative educational journey at Yenepoya
          University, pursuing a Bachelor of Computer Applications (Hons) with a
          focused dedication to Product Software Engineering at Kalvium, set for
          completion in 2027. My expertise in software development and
          programming has been cultivated through a blend of relentless
          self-learning and hands-on industry experience.
        </p>
        <br />
        <p className="text-xl">
          My fervor lies in creating innovative solutions for real-world
          challenges, fueled by a combination of problem-solving skills and
          effective communication. The synergy of my academic foundation and
          practical exposure equips me with the tools to innovate and address
          the evolving needs of our interconnected world.
        </p>
        <br />
        <p className="text-xl">
          Driven by an insatiable thirst for growth, I embrace each opportunity
          as a chance to expand my skill set and contribute meaningfully to
          technological and societal progress. Committed to continuous learning
          and improvement, my ultimate goal is to evolve into a dynamic and
          adaptable software engineer, making impactful strides in the
          ever-evolving technology landscape. Join me on this exciting journey
          as I endeavor to shape the future through my unwavering passion for
          software development.
        </p>
      </div>
    </div>
  );
};

export default About;
