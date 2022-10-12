import React from 'react'
import pro from '../../assets/hack.gif';
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
                <p className='para'>{`I’m a final year student currently pursuing a bachelor’s of technology. I’m a tech-savvy and voracious student, I enjoy technology and like to learn new things.`}<br /> {`I have a strong desire to study and understand various technologies. I'm looking for new chances, so please get in touch if you think I might be of help.`}</p>
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