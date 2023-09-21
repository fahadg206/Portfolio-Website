import React from "react";
import Fahad from "../images/fahad.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1a1a1c] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ba30e8]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi, I'm Fahad, nice to meet you. Please take a look around!
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <img
              className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-xl"
              src={Fahad}
              alt="headshot"
            />
            <p className="sm: my-[30px] indent-7">
              I'm Fahad Guled, a Full-Stack Developer. In mid-2021, I made a
              bold move, transitioning into tech and embarking on a self-taught
              coding journey. My passion for tech and a desire to push my limits
              fueled this transition. Along the way, I've honed the ability to
              swiftly grasp new concepts, applying them to real-world apps. I've
              also embraced the importance of enjoying the learning process.{" "}
              <br />
              <p className="sm: my-[30px] indent-7">
                But that's not all – my experience with Fantasy Pulse, a
                substantial app, has been instrumental in shaping me into the
                developer I am today. I've gained valuable real-world experience
                by actively addressing user-submitted bugs to optimize user
                engagement, & leading the creation of a dynamic sports-tech
                application currently serving over 500 users! This is just the
                beginning of my software engineering journey! 🚀
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
