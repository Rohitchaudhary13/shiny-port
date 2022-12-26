import React from 'react'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import { motion } from 'framer-motion';
import NavTop from '../components/Navbar-Top/NavTop';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';

const ProjectsPage = () => {
  return (
    <motion.div>
        <NavTop />
        <SmoothScroll>
        <div className='container' style={{marginTop: '10rem'}}>
          <Projects />
        </div>
        <Footer />
        </SmoothScroll>
    </motion.div>
  )
}

export default ProjectsPage