import '../index.css';
import React from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';
import me from '../assets/mee.jpg';
import resume from './rohitchoudharyResume.pdf';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavTop from '../components/Navbar-Top/NavTop';

const hue_image = {
  position: 'relative',
  zIndex: 1,
  background: 'transparent',
  scale: [1, 1.2, 1.1],
  rotate: [0, 10, -10, 0],
  transition: {
  duration: .5
  },
  filter: [
    'hue-rotate(0) contrast(100%)',
    'hue-rotate(360deg) contrast(200%)',
    'hue-rotate(45deg) contrast(300%)',
    'hue-rotate(0) contrast(100%)'
  ],
}
const AboutPage = () => {
  return (
    <motion.div>
      <NavTop />
      <div className="container" style={{marginTop: '25vh'}}>
        <h3 className="about-page-hi">Hi, I am  <span className='about-page-name'>Rohit Chaudhary</span></h3>
        <h1 className='about-page-webd'>A Web Developer</h1>
    <div className="about-page-container">
      <div className="about-page-left-col">
        <p className="about-page-description">A final-year student at Abes Engineering College in Ghaziabad studying a bachelor's degree in technology aspiration. I'm a tech-savvy and avid learner who enjoys fixing issues with technology and learning new things. As a web developer, my technical talents include HTML, CSS, JavaScript, Bootstrap, ReactJs, Framer Motion, SQL, and others. Aside from them, I'm proficient in C/C++, Python, and Data Structures and Algorithms. I have a tremendous drive to learn about and comprehend diverse technologies. I'm searching for new opportunities, so feel free to contact me if you believe I can assist you.<br /> </p>
        <NavLink to={resume} target="_blank" download><button class="about-page-btn-resume">Download Resume</button></NavLink>

      </div>
      <motion.div className='about-page-right-col' whileTap={{ scale: 0.9 }} whileHover={hue_image}>
        <img className='about-page-image' src={me} alt="me" />
      </motion.div>
    </div>
      </div>
      <Contact />
      <Footer />
      </motion.div>
  )
}

export default AboutPage