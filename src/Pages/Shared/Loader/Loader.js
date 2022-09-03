import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader dark:bg-black">
      <section id="preloader-section">
        <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>

              <div className="txt-loading">
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  K
                </span>
                <span data-text-preloader="C" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  M
                </span>
                <span data-text-preloader="" className="letters-loading">
                  {" "}
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="T" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="I" className="letters-loading">
                  K
                </span>
                <span data-text-preloader="V" className="letters-loading">
                  I
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  B
                </span>
              </div>
            </div>

            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loader;
