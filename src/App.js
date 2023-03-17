import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Home'
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AnimatedCursor from "react-animated-cursor"
import {motion} from 'framer-motion';

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";


function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: (
        <AboutPage />
      )
    },
    {
      path: "/projects",
      element: (
        <ProjectsPage />
      )
    },
    {
      path: "/contact",
      element: (
        <ContactPage />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
const AppWrapper = () => {

  return (
    <motion.div className="App"
      >
      
      <AnimatedCursor
        color="0,0,0"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #000',
        }}
        />
        
      <Router>
      <Navbar />
        <App />
      {/* 
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<AboutPage/>} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<ProjectsPage/>} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<ContactPage/>} />
        </Routes> */}
      </Router>
      
    </motion.div>
  );
}

export default AppWrapper;
