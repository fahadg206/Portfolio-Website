import React from "react";
import SpotifyApp from "../images/Spotify.png";
import YoutubeApp from "../images/Youtube.png";
import HackerNewsApp from "../images/HackerNews.png";
import RecipeApp from "../images/Recipe.png";
import TodoApp from "../images/Todo.png";
import TipCalculator from "../images/Tip.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#1a1a1c]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ba30e8]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${TodoApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                Todo Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/fahadg206/Todo-App-Redux"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SpotifyApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                Spotify Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://spotify-app-khaki-five.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/fahadg206/Spotify_App"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${YoutubeApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                YouTube Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://youtube-hooks-blue.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/fahadg206/Youtube_App"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${HackerNewsApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                HackerNews Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/fahadg206/HackerNews_App"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RecipeApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                Recipe Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://recipe-app-two-black.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/fahadg206/Recipe-App"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TipCalculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex -justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-2">
                Tip Calculator App
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://tip-calculator-gilt-alpha.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/fahadg206/Tip-Calculator"
                  target="_blank"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
