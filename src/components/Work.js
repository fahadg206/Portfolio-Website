import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FantasyPulse from "../images/FantasyPulseScreenShot.png";
import Todo from "../images/Todo.png";
import Youtube from "../images/Youtube.png";
import Spotify from "../images/Spotify.png";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div name="work" className="p-4 md:p-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ba30e8] mb-4 w-[30%]">
          Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="Fantasy Pulse"
          description="AI-driven fantasy sports entertainment app"
          imgSrc={FantasyPulse}
          textColor="white"
          gitHubLink={"https://github.com/fahadg206/FantasyPulse"}
          websiteLink={"https://www.fantasypulseff.com"}
        />
        <Card
          heading="Youtube-App"
          description="Video discovery web application"
          imgSrc={Youtube}
          textColor={"black"}
          gitHubLink={"https://github.com/fahadg206/Youtube_App"}
          websiteLink={"https://youtube-hooks-blue.vercel.app/"}
        />
        <Card
          heading="Todo-App"
          description="Web-based task management system"
          imgSrc={Todo}
          textColor="black"
          gitHubLink={"https://github.com/fahadg206/Todo-App-Redux"}
          websiteLink={""}
        />
        <Card
          heading="Spotify-App"
          description="Music discovery web application"
          imgSrc={Spotify}
          textColor="white"
          gitHubLink={"https://github.com/fahadg206/Spotify_App"}
          websiteLink={"https://spotify-app-khaki-five.vercel.app"}
        />
      </div>
    </div>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
  textColor,
  websiteLink,
  gitHubLink,
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0  group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className={`p-4 relative z-20 h-full text-[${textColor}] group-hover:text-[${textColor} ] transition-colors duration-500 flex flex-col justify-between`}
      >
        <div className="w-full flex justify-between">
          <a href={gitHubLink} target="_blank">
            <FaGithub className="text-3xl group-hover:-rotate-45 transition-transform duration-500 " />
          </a>
          <a href={websiteLink} target="_blank">
            <FiArrowRight
              className={
                websiteLink === ""
                  ? `hidden`
                  : `text-3xl group-hover:-rotate-45 transition-transform duration-500 `
              }
            />
          </a>
        </div>

        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Work;
