import React, { useEffect, useState } from 'react';
import service1 from './../../../Assets/SvgAnimations/service1.json';
import service2 from './../../../Assets/SvgAnimations/service2.json';
import service3 from './../../../Assets/SvgAnimations/service3.json';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'FRONTEND DEVELOPER',
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service1,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description:
      'As a Front-End developer I have vast experience in making user-friendly web interfaces that help improve user experience and increase customer engagement.',
    serviceAnimation: {
      hidden: {
        x: '-100vw',
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, type: 'spring' },
      },
    },
  },
  {
    id: 2,
    title: 'RESPONSIVE WEB DESIGN',
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service2,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description:
      'I develop responsive website in both large and small or mobile screen with top notch UI/UX designs.',    
      serviceAnimation: {
      hidden: {
        x: '-100vw',
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5, type: 'spring' },
      },
    },
  },
  {
    id: 3,
    title: 'BACKEND DEVELOPER',
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service3,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description:
      'I also design backend development for various web and mobile apps. I always ensure i provide you the best service to achieve your goals.',
      serviceAnimation: {
      hidden: {
        x: '-100vw',
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1, type: 'spring' },
      },
    },
  },
];

const Services = () => {
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
    <section className="container px-6 mx-auto pb-20">
      <h2 className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
        Our
        <span className="text-indigo-600 dark:text-indigo-500"> Services</span>
      <div
        className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-stretch lg:items-stretch gap-x-8"
        ref={ref}
      >
        {servicesData.map((service) => (
          <motion.div
            initial="hidden"
            animate={viewDiv && 'visible'}
            variants={service.serviceAnimation}
            key={service.id}
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-6 md:w-60 lg:w-auto lg:h-auto md:h-96"
          >
            <Lottie
              options={service?.lottieOptions}
              height={'50%'}
              width={'70%'}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl md:text-sm lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service?.title}
              </h5>
              <p className="mb-3 lg:text-base	 font-normal md:text-xs text-gray-700 dark:text-gray-400">
                {service?.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Hire me
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
