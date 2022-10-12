import React from 'react'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import { motion } from 'framer-motion';
import NavTop from '../components/Navbar-Top/NavTop';

const ProjectsPage = () => {
  return (
    <motion.div style={{marginTop: '20vh'}}>
        <NavTop />
        <div className='container'>
          <Projects />
        </div>
        <Footer />
    </motion.div>
  )
}

export default ProjectsPage