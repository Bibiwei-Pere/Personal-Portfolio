import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Akram Sakib | About</title>
      </Helmet>
      <section className="text-gray-700 px-6 body-font dark:text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Web Application{' '}
              <span className="text-indigo-600 dark:text-indigo-500">
                {' '}
                Developer
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              🍇 ⋆ 🍒 🎀 𝐻𝑒𝓎 𝓉𝒽𝑒𝓇𝑒❣ 𝐼'𝓂 𝒶{' '}
              <del>𝒹𝓇𝒶𝑔💙𝓃 𝓁🍑𝓈𝓉 𝒾𝓃 𝒽𝓊𝓂𝒶𝓃 𝓌❤𝓇𝓁𝒹</del> 𝒞🍬𝓂𝓅𝓊𝓉𝑒𝓇 𝒮𝒸𝒾𝑒𝓃𝒸𝑒 𝒟𝒾𝓅𝓁❀𝓂𝒶
              𝐸𝓃𝑔𝒾𝓃𝑒𝑒𝓇'𝓈 𝓈𝓉𝓊𝒹𝑒𝓃𝓉 𝒶𝓉 𝒟𝒽𝒶𝓀𝒶 𝒫💮𝓁𝓎𝓉𝑒𝒸𝒽𝓃𝒾𝒸 𝐼𝓃𝓈𝓉𝒾𝓉𝓊𝓉𝑒. 🎀 🍒 ⋆ 🍇. 🍰
              🎀 𝒜𝓈 𝒶 𝓊𝓈𝑒𝓇 𝒾𝓃𝓉𝑒𝓇𝒻𝒶𝒸𝑒 𝒹𝑒𝓈𝒾𝑔𝓃𝑒𝓇 𝒻🍬𝓇 𝒸☯𝓂𝓅𝓁𝑒𝓍 𝒾𝓈𝓈𝓊𝑒𝓈, 𝐼 𝑒𝓃�🌺𝓎
              �𝓉𝓇𝒶𝓃𝓈𝒻☯𝓇𝓂𝒾𝓃𝑔 𝓉𝒽𝑒𝓂 𝒾𝓃𝓉🌞 𝓈𝒾𝓂𝓅𝓁𝑒, 𝓈𝓉𝓎𝓁𝒾𝓈𝒽 𝒾𝓃𝓉𝑒𝓇𝒻𝒶𝒸𝑒𝓈. 𝐿❀𝑔𝒾𝒸 �𝓃𝒹
              𝓈𝓉𝓇𝓊𝒸𝓉𝓊𝓇𝑒 𝓂𝒶𝓉𝓉𝑒𝓇 𝓉🍩 𝓂𝑒, 𝓈💞 𝐼 𝒶𝓂 𝒶𝓁𝓌𝒶𝓎𝓈 𝓈𝓉𝓇𝒾𝓋𝒾𝓃𝑔 𝓉💮 𝓌𝓇𝒾𝓉𝑒
              𝑒𝓁𝑒𝑔𝒶𝓃𝓉, 𝑒𝒻𝒻𝒾𝒸𝒾𝑒𝓃𝓉, 𝒶𝓃𝒹 𝓌𝑒𝓁𝓁-𝓈𝓉𝓇𝓊𝒸𝓉𝓊𝓇𝑒𝒹 𝒸🌸𝒹𝑒, 𝓇𝑒𝑔𝒶𝓇𝒹𝓁𝑒𝓈𝓈 ❁𝒻
              𝓌𝒽𝑒𝓉𝒽𝑒𝓇 𝒾𝓉 𝒾𝓈 𝐻𝒯𝑀𝐿, 𝒞𝒮𝒮, ❀𝓇 𝒥𝒮. 𝐼'𝓂 𝒻𝓇𝑒𝑒 𝓉🍪 𝒹𝑒𝓋𝑒𝓁♡𝓅 𝒻𝓊𝓁𝓁-𝓈𝓉𝒶𝒸𝓀
              𝓌𝑒𝒷𝓈𝒾𝓉𝑒𝓈 𝒶𝓈 𝓌𝑒𝓁𝓁. 🎀 🍰
            </p>
            <div className="flex justify-center">
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1ZBioCcrhS1JKp-6Azu61jH2RSeBtu_bB/view?usp=sharing"
                target={'_blank'}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Resume
              </a>
              <Link to="/contact">
                <button className="inline-flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.ibb.co/0F27pVK/Akram-Sakib.png"
            />
          </div>
        </div>
      </section>
      <section className="edu_cation">
        <div className="educationWrapper">
          <div className="workheading dark:text-white">Education</div>

          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">Junior Dakhil Certificate</h3>
                  <p className="dark:text-gray-400">
                    Fulmati Islamia Alim Madrasah
                  </p>
                  <p className="dark:text-gray-400">
                    Completed JDC From Fulmati Madrasah
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">Jan - Dec 2018</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">
                    Secondary School Certificate
                  </h3>
                  <p className="dark:text-gray-400">
                    Fulmati Islamia Alim Madrasah
                  </p>
                  <p className="dark:text-gray-400">
                    Completed SSC From Fulmati Madrasah
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">Jan - Fab 2019 - 2020</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3 className="dark:text-white">Computer Technology</h3>
                  <p className="dark:text-gray-400">
                    Dhaka Polytechnic Institute
                  </p>
                  <p className="dark:text-gray-400">
                    Currently I am studying in Dhaka Polytechnic Institute
                  </p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: '#263859',
                  }}
                >
                  <h4 className="dark:text-white">Sep - May 2022</h4>
                </div>
              </li>
              <div style={{ clear: 'both' }}></div>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font dark:text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="skills_left">
            <div className="my-8">
              <span className="text-indigo-700 text-lg">Skills</span>
              <h3 className="text-4xl uppercase font-extrabold">
                Programming Skills
              </h3>
            </div>
            <div className="my-8 w-4/6">
              <p>
                For more than 2 years our experts have been accomplishing enough
                with modern Web Development, new generation web and app
                programming language.
              </p>
            </div>
            <div className="progress_bar">
              <div className="my-4">
                <div className="mb-1 text-base font-medium">React</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">Javascript</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className="my-8">
                <div className="mb-1 text-base font-medium">Backend</div>
                <div className="w-full h-4 bg-transparent rounded-full">
                  <div
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="right-img w-4/6
           relative"
          >
            <div className="w-4/6 h-96 bg-indigo-600">
              <img
                src="https://marketifythemes.net/html/kura/img/portfolio/2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
