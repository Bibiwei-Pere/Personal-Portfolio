import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  HowIWorkAllProcess,
  HowIWorkHeading,
  HowIWorkSubHeading,
} from '../../../Animations/Animations';
import './WorkProcess.css';

const WorkProcess = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [viewDiv, setViewDiv] = useState(false);

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    }
    if (!inView) {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <section ref={ref} className="container px-6 mx-auto py-20">
      <div className="text-center mb-28">
        <motion.h3
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={HowIWorkHeading}
          className="my-6 text-5xl text-center tracking-tight font-extrabold text-dark dark:text-white sm:leading-none"
        >
          How I
          <span className="text-indigo-600 dark:text-indigo-500"> Work</span>
        </motion.h3>
        <motion.h2
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={HowIWorkSubHeading}
          className="text-3xl font-extrabold dark:text-white"
        >
          I prepare your projects in 3 stages
        </motion.h2>
      </div>
      <motion.div
        initial="hidden"
        animate={viewDiv && 'visible'}
        variants={HowIWorkAllProcess}
        className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-stretch lg:items-stretch gap-x-8"
      >
        <div className="how-i-work-item">
          <img
            src=""
            alt="Arrrow Pic"
            className="arrow-dashed-img hidden md:inline-block"
          />
          <div className="number">
            <span>01</span>
          </div>
          <div className="number-border"></div>
          <div className="img">
            <img src="" className="img-fluid" alt="How i work" />
          </div>
          <div className="text">
            <h5 className="font-extrabold">Thinking</h5>
          </div>
        </div>
        <div className="how-i-work-item">
          <img
            src=""
            alt="Arrrow pic"
            className="arrow-dashed-img hidden md:inline-block"
          />
          <div className="number">
            <span>02</span>
          </div>
          <div className="number-border"></div>
          <div className="img">
            <img src="" className="img-fluid" alt="How i work" />
          </div>
          <div className="text">
            <h5 className="font-extrabold">Research</h5>
          </div>
        </div>
        <div className="how-i-work-item">
          <div className="number">
            <span>03</span>
          </div>
          <div className="number-border"></div>
          <div className="img">
            <img src="" className="img-fluid" alt="How i work" />
          </div>
          <div className="text">
            <h5 className="font-extrabold">Design</h5>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkProcess;
