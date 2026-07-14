import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const RESUME_PATH = "/resume.pdf";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My credentials</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Take a look through my full resume below, or grab a copy for yourself.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className='mt-10 flex flex-col items-center gap-6'
      >
        <div className='w-full max-w-4xl h-[75vh] bg-tertiary rounded-2xl overflow-hidden shadow-card'>
          <iframe
            src={RESUME_PATH}
            title='Titus Maina Kamau - Resume'
            className='w-full h-full'
            frameBorder='0'
          >
            <p className='text-white p-6'>
              Your browser doesn't support embedded PDFs. You can{" "}
              <a href={RESUME_PATH} className='text-[#915EFF] underline'>
                download the resume here
              </a>{" "}
              instead.
            </p>
          </iframe>
        </div>

        <a
          href={RESUME_PATH}
          download='Titus_Maina_Kamau_CV.pdf'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary hover:scale-105 transition-transform'
        >
          Download CV
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");