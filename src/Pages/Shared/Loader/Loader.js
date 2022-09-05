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
                <span data-text-preloader="P" className="letters-loading">
                  B
                </span>
                <span data-text-preloader="" className="letters-loading">
                  I
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  B
                </span>
                <span data-text-preloader="" className="letters-loading">
                  I
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  W
                </span>
                <span data-text-preloader="" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  I
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
