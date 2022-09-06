import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import WorkProcess from "./WorkProccess/WorkProcess";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bibiwei Pere | Home</title>
        <meta
          property="og:title"
          content="Bibiwei Pere's Personal Portfolio Website"
        />
        <meta
          property="og:description"
          content="MERN Stack Developer || Full-stack Developer || Front-End Developer || React JS Develooper || JavaScript Developer"
        />
        <meta property="og:url" content="https://bibiweipere.netlify.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Adrenaline9/worship/8f6fd1c7dbdb7cf74857410bfbc9953bffa4c0e7/src/Assets/Images/logo.svg"
        />
      </Helmet>
      <Banner />
      <Services />
      <Testimonial />
      <Projects />
      <WorkProcess />
    </>
  );
};

export default Home;
