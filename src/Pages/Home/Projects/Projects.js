import React, { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Project from "./Project/Project";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectHeadingText, ProjectSubHeadingText } from "../../../Animations/Animations";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const res = await fetch("./projects.json");
    const data = await res.json();
    setProjects(data.result);
    setFiltered(data.result);
  };

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
    <>
      <section className="container px-6 mx-auto py-20" ref={ref}>
        <motion.h2
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={ProjectHeadingText}
          className="mb-4 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none"
        >
          Something that he has
          <span className="text-indigo-600 dark:text-indigo-500"> build</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={ProjectSubHeadingText}
          className="text-xl text-center dark:text-gray-400"
        >
          with love, expertise and pinch of magical ingredients
        </motion.p>
        <div className="text-center">
          <Filter
            projects={projects}
            setFiltered={setFiltered}
            active={active}
            setActive={setActive}
          />
        </div>
        <motion.div
          layout
          // initial="hidden"
          // animate={viewDiv && "visible"}
          // variants={AllProjectsAnimation}

          className="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-1 lg:grid-cols-2 place-items-center"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <Project key={project._id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
