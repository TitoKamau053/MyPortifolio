import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full'
  >
    <Tilt
      className='w-full'
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hey, I'm Titus — a fullstack developer who enjoys turning problems into 
        softwares. My days move between React and Blazor on the frontend, 
        Node.js, FastAPI, dotnet(C#) and SpringBoot on the backend, with MongoDB, MySQL, and Firebase 
        holding everything together. I've spent time in Flutter and React Native building 
        mobile apps, dabbled in Solidity for Web3 on Avalanche, and picked up a few DevOps 
        habits along the way with Nginx, Docker, and VPS hosting.
        <br className='hidden sm:block' /><br className='hidden sm:block' />
        I have spent time inside banking — and it taught me something code 
        alone doesn't: how software actually earns people's trust. That's still how I 
        approach every build: it should be solid under the hood, and genuinely easy to trust.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");