import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-lg">
          I specialize in a dynamic blend of technical and creative skills,
          making me a versatile professional in the digital world. My primary
          languages include C++, HTML5, CSS3/Tailwind CSS and Javascript/React.JS providing a strong
          foundation for web development and software engineering. On the
          creative front, I possess proficiency in graphic design and video
          editing using tools like Photoshop, Premiere Pro, Illustrator, and
          Filmora Pro. This allows me to transform ideas into visually stunning and
          engaging content, whether it's for websites, marketing materials, or
          multimedia presentations.
        </p>
        <br />
        <p className="text-lg">
          Complementing my technical and creative abilities are my soft skills,
          including effective communication, problem-solving, and teamwork. I
          excel at collaborating with cross-functional teams to deliver
          innovative solutions and user-friendly designs. In essence, I am a
          well-rounded professional with a knack for marrying technology and
          creativity. Whether it's coding for functionality or designing for
          aesthetics, I bring a comprehensive skill set to the table, ensuring
          that projects I undertake are both functional and visually
          captivating.
        </p>
      </div>
    </div>
  );
};

export default About;
