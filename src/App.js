import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
// import Background from "./Pages/Shared/Theme/Background/Background";
// import Home from "./Pages/Home/Home";
// import Navbar from "./Pages/Shared/Navbar/Navbar";
// import Blog from "./Pages/Blog/Blog";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";
// import Portfolios from "./Pages/Portfolios/Portfolios";
// import Footer from "./Pages/Shared/Footer/Footer";
import Particle from './Particle/Particle';
import AnimatedCursor from 'react-animated-cursor';
// import NotFound from "./Pages/NotFound/NotFound";
import { lazy, Suspense } from 'react';
import Loader from './Pages/Shared/Loader/Loader';

const Background = lazy(() =>
  import('./Pages/Shared/Theme/Background/Background')
);

const Home = lazy(() => import('./Pages/Home/Home'));

const Navbar = lazy(() => import('./Pages/Shared/Navbar/Navbar'));

const Blog = lazy(() => import('./Pages/Blog/Blog'));

const About = lazy(() => import('./Pages/About/About'));

const Contact = lazy(() => import('./Pages/Contact/Contact'));

const Portfolios = lazy(() => import('./Pages/Portfolios/Portfolios'));

const Footer = lazy(() => import('./Pages/Shared/Footer/Footer'));

const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <ThemeProvider>
        <HelmetProvider>
          <AnimatedCursor innerSize={12} outerSize={10} color="67, 56, 202" />
          <Particle />
          <Navbar />
          <Background>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/portfolio" element={<Portfolios />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Background>
          <Footer />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
