import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import ContactMe from "./../../Assets/SvgAnimations/contact.json";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ContactHeadingAnimation,
  ContactLeftAnimation,
  ContactRightAnimation,
  ContactTextAnimation,
} from "../../Animations/Animations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

const Contact = () => {


  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const property in values) {
      if (values[property] === "") {
        toast.warn(
          `${property.toLocaleLowerCase()} field must be not empty`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return
      }
    }
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if (!regexEmail.test(values.email)) {
      toast.warn(`Enter a valid email address`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } 
    emailjs
      .send(
        "service_klmnlpa",
        "template_e561uqe",
        values,
        "bRQYhsDt_AvcZUIkc"
      )
      .then(
        (res) => {
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (err) => {
          toast.error("Something Went Error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactMe,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
      <Helmet>
        <title>Bibiwei Pere - Contact</title>
      </Helmet>
      <section className="contact_section text-gray-700 body-font dark:text-white py-24 md:py-32" ref={ref}>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="text-center mb-4">
          <p className="text-sm leading-7 dark:text-white text-gray-500 font-regular md:font-bold uppercase">
            Contact
          </p>
          <h3 className="text-4xl md:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
        </div>
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <motion.div
            className="lottie pb-5"
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={ContactLeftAnimation}
          >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </motion.div>
          <motion.div
            className="max-w-screen-md mx-auto p-5"
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={ContactRightAnimation}
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    onBlur={handleChange}
                    required
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    onBlur={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    htmlFor="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="********@*****.**"
                    onBlur={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    htmlFor="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="message"
                    onBlur={handleChange}
                    required={true}
                  ></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm dark:text-white">
                        Send me your newsletter!
                      </span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
        
        <div className="container mx-auto items-center p-15">
        <div className="my-8 text-center">
          <h3 className="text-3xl md:text-4xl uppercase font-extrabold">
          Connect with me
          </h3>
        </div>

        <div className="flex justify-between flex-wrap px-10">
         <div className="w-72 my-10 p-5 h-40 border-2 border-dark rounded-md">
           <span className="block text-indigo-700 text-3xl text-center">My Address</span>
               <p className="text-center text-3xl dark:text-white text-dark sm:mt-15 sm:max-w-xl mt-5 text-lg">
                 Giwa-amu Street, Estate, Warri, Delta State, Nigeria
               </p>
          </div>
         <div className="w-72 my-10 p-5 h-40 border-2 border-dark rounded-md">
           <span className="block text-indigo-700 text-3xl text-center">Social Profiles</span>
               <div className="social-links flex px-5 flex-row items-center sm:mt-15 sm:max-w-xl mt-5">
                    <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100074182476935"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
                    <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://t.me/Bibiwei_Pere"
              >
                <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://twitter.com/Bibiwei_Pere?t=q-mMQLff5YLlq42Mv31Itw&s=09"
              >
                <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.linkedin.com/in/Bibiwei-Pere"
              >
                <i className="fa-brands fa-linkedin"></i>
                    </a>
                 </div>
         </div>
         <div className="w-72 my-10 p-5 h-40 border-2 border-dark rounded-md">
           <span className="block text-indigo-700 text-3xl text-center">Email</span>
           <a
              rel="noreferrer"
              className="dark:text-white dark:bg-slate-700"
              target="_blank"
              href="mailto:bibiweijnr@gmail.com"
              >
             <p className="text-center text-3xl dark:text-white text-dark sm:mt-15 sm:max-w-xl mt-5 text-lg">
              bibiweipere@gmail.com
             </p>
           </a>    
         </div>
         <div className="w-72 my-10 p-5 h-40 border-2 border-dark rounded-md">
             <span className="block text-indigo-700 text-3xl text-center">Contact</span>         
             <p className="text-center text-3xl dark:text-white text-dark sm:mt-15 sm:max-w-xl mt-5 text-lg">
              +2348118333284
             </p>
           </div>
      </div>  
      </div>
      </section>
    </>
  );
};

export default Contact;
