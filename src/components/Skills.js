import React from "react";
import ReactImg from "../images/react.png";
import githubImg from "../images/github.png";
import cssImg from "../images/css.png";
import htmlImg from "../images/html.png";
import javascriptImg from "../images/Javscript.png";
import typescriptImg from "../images/Typescript.png";
import reduxImg from "../images/redux.png";
import Mongo from "../images/mongo.png";
import Node from "../images/node.png";
import OpenAI from "../images/Ai.png";
import Next from "../images/next.png";
import Firebase from "../images/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#1a1a1c] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-cold inline border-b-4 border-[#ba30e8]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={typescriptImg}
              alt="JavaScript icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascriptImg}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Redux icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={OpenAI} alt="Redux icon" />
            <p className="my-4">OpenAI</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="React icon" />
            <p className="my-4">Next JS 13</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Redux icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="Redux icon" />
            <p className="my-4">FireBase</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={htmlImg} alt="HTML icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={cssImg} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reduxImg} alt="Redux icon" />
            <p className="my-4">Redux</p>
          </div>
          <div className="shadow-md shadow-[#ba30e8] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={githubImg} alt="Github icon" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
