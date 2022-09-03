import { motion } from "framer-motion";
import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <motion.div
      layout
      className="project_parent"
      animate={{
        opacity: 1,
        scale: 1,
      }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project_cardtitle">
        <h1 className="project_projecttitle dark:text-white">
          {project?.name}
        </h1>
        <div className="chakra_stack">
          {project?.tags.map((tag, index) => (
            <div key={index}>
              <span className="stack">
                <span className="inside_stack first-letter:uppercase">
                  {tag}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="project_imageandsocial">
        <div className="project_cardbox dark:border-white">
          <img src={project?.featureimg} alt="" />
        </div>
        <div>
          <div className="project_socialicon dark:border-white">
            <a
              rel="noreferrer"
              target="_blank"
              className="dark:text-white"
              href={project?.projectlink}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github-alt"
                className="svg-inline--fa fa-github-alt fa-w-15 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 512"
              >
                <path
                  fill="currentColor"
                  d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="project_socialicon dark:border-white">
            <a
              rel="noreferrer"
              target="_blank"
              className="dark:text-white"
              href={project?.frontendlink}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="telegram-plane"
                className="svg-inline--fa fa-telegram-plane fa-w-14 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="project_cardbottom">
        <p className="dark:text-gray-400">{project?.description}</p>
      </div>
    </motion.div>
  );
};

export default Project;
