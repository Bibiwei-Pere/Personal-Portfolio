import React, { useEffect } from 'react';

const Filter = ({ projects, setFiltered, active, setActive }) => {
  
  useEffect(() => {
    if (active === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category.includes(active)
    );
    setFiltered(filtered);
  }, [active, projects, setFiltered]);

  return (
    <div className="flex justify-center py-12 flex-wrap">
      <button
        className={
          active === "all"
            ? "rounded mx-2 bg-indigo-900 py-2 px-4 text-white"
            : "rounded mx-2 bg-indigo-700 hover:bg-indigo-800  py-2 px-4 text-white"
        }
        onClick={() => setActive("all")}
      >
        All
      </button>
      <button
        className={
          active === "business"
            ? "rounded mx-2 bg-indigo-900 py-2 px-4 text-white"
            : "rounded mx-2 bg-indigo-700 hover:bg-indigo-800  py-2 px-4 text-white"
        }
        onClick={() => setActive("business")}
      >
        Business
      </button>
      <button
        className={
          active === "portfolio"
            ? "rounded mx-2 bg-indigo-900 py-2 px-4 text-white"
            : "rounded mx-2 bg-indigo-700 hover:bg-indigo-800  py-2 px-4 text-white"
        }
        onClick={() => setActive("portfolio")}
      >
        Portfolio
      </button>
      <button
        className={
          active === "e-commerce"
            ? "rounded mx-2 bg-indigo-900 py-2 px-4 text-white"
            : "rounded mx-2 bg-indigo-700 hover:bg-indigo-800  py-2 px-4 text-white mt-4 sm:mt-0"
        }
        onClick={() => setActive("e-commerce")}
      >
        E-Commerce
      </button>
    </div>
  );
};

export default Filter;