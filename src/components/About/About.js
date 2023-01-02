import React from 'react'
import pro from '../../assets/1.jpeg';
import { NavLink } from 'react-router-dom';
import '../About/About.css'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
        <div className="container-about">
            <div className="left">
                <h2 className="head">Let me introduce myself</h2>
                <h2 className="about-me">ABOUT ME</h2>
                <p className='para'>{`I'm presently a senior studying for a bachelor's degree in technology. I love technology and learning new things. I am a tech-savvy student that learns consistently. I also teach and guide developers as they delve further into the technology. I'm quite eager to research and comprehend diverse technologies. If you believe I may be of assistance, get in touch with me since I'm seeking for new opportunities.`}</p>
                <div className='buttons'>
                    <NavLink to="/projects"><button className='btn btn-light'>Works</button></NavLink>
                    <NavLink to="/about"><button className='btn btn-dark'>Read_More</button></NavLink>
                </div>
            </div>
            <motion.div className='right' whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}>
                <img className='img-big' src={pro} alt="big" />
            </motion.div>
        </div>
    </div>
  )
}

export default About