import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';

const Blog = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Bibiwei Pere - Blogs</title>
      </Helmet>
      <div className="flex px-6 py-96 items-center dark:bg-gray-900 justify-center lg:h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl dark:text-white">
                Coming<span className="text-indigo-600"> Soon</span>
              </h2>
              <p className="text-md md:text-xl mt-10 dark:text-white">
                <Link className="hover:underline" to="/">
                  Go to Home,
                </Link>
                In future we will work on this section
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <a
                  rel="noreferrer"
                  target='_blank'
                  href="https://www.facebook.com/profile.php?id=100074182476935"
                  title="Bibiwei Pere On Facebook"
                  className="md:w-32 bg-white tracking-wide dark:bg-gray-900 hover:dark:bg-indigo-600 dark:text-white text-gray-800 font-bold rounded border-2 border-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Facebook</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  rel="noreferrer"
                  target='_blank'
                  href="https://www.linkedin.com/in/bibiwei-pere-9a34b024b"
                  title="Bibiwei Pere On LinkedIn"
                  className="md:w-32 bg-white tracking-wide dark:bg-gray-900 hover:dark:bg-indigo-600 dark:text-white text-gray-800 font-bold rounded border-2 border-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Start From Here */}
      <section className="container px-6 mx-auto pb-20">
        <h2 className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          Recent
          <span className="text-indigo-600 dark:text-indigo-500"> Blogs</span>
        </h2>
        <div className="">
          <Slider {...settings}>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <Link
                  to="/"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      How to become a Web Developer
                    </h1>
                  </div>
                </Link>
                <img
                  src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                  alt="blog"
                  className="blog-image w-full h-full hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <Link
                  to="/"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      How to become a Sr Developer
                    </h1>
                  </div>
                </Link>
                <img
                  src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                  alt="blog"
                  className="blog-image w-full h-full hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <Link
                  to="/"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      How to become a Web Developer
                    </h1>
                  </div>
                </Link>
                <img
                  src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                  alt="blog"
                  className="blog-image w-full h-full hidden rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mx-4 rounded-lg shadow single-blog cursor-pointer relative">
                <Link
                  to="/"
                  className="blog-text bg-indigo-900 bg-opacity-80 rounded-lg"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-white text-2xl font-semibold text-center">
                      How to become a Web Developer
                    </h1>
                  </div>
                </Link>
                <img
                  src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                  alt="blog"
                  className="blog-image w-full h-full hidden rounded-lg"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Blog;
