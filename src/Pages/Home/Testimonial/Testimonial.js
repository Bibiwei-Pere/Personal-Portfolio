import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactStars from 'react-rating-stars-component';

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    Axios.get('https://testimonialapi.toolcarton.com/api')
      .then((data) => {
        // handle success
        console.log(data.data);
        setTestimonial(data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);

  const settings_1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className="container px-6 mx-auto py-10 pb-16" ref={ref}>
      <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
        Client
        <span className="text-indigo-600 dark:text-indigo-500"> Review</span>
      </h2>
      <p className="text-xl text-left dark:text-gray-400">
      Client satisfaction is our main priority. We always welcome the positive feedback we receive from our clients. Here’s what they’re saying about us.
      </p>
      <div className="mt-12 px-6">
        <Slider {...settings_1}>
          {testimonial.map((review) => (
            <div key={review.id}>
              <div className="flex flex-col items-center md:mx-auto bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={review.avatar}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {review.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {review.message.slice(0, 130)}
                    {'.'}
                  </p>
                  <div>
                    <ReactStars
                      readonly={true}
                      edit={false}
                      count={5}
                      size={40}
                      isHalf={true}
                      activeColor="#4338ca"
                      value={review.rating}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
