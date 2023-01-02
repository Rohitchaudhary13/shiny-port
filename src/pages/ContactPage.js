import {SiBuymeacoffee} from 'react-icons/si';
import {AiOutlineMail} from 'react-icons/ai'
import './ContactPage.css';
import '../index.css';
import Footer from '../components/Footer/Footer.js';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import NavTop from '../components/Navbar-Top/NavTop';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';


const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iemkn4a', 'template_pk672je', form.current, 'vTrEKw_eKgN7ir7Ax')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })};
  return (
    <motion.div animate={{ y: 0, opacity: 1, type: "spring"}} initial={{ opacity: 0.6, y: 310 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
      {/* <NavTop /> */}
      <SmoothScroll>
      <h3 className='contact-page-small-title'>Get In Touch</h3>
      <h1 className='contact-page-title'>Contact</h1>
      <div className='container'>
      <div className='contact-page-container'>
        <div className='contact-page-col1'>
          <motion.div className='col1-box1' whileTap={{ scale: 0.7 }}>
            <AiOutlineMail style={{fontSize: '2rem', color: 'white'}} />
            <h3 className='contact-page-box-title'>Email</h3>
            <h5 className='contact-page-box-sub'>styyx09@gmail.com</h5>
            <a className='contact-page-box-link' href='mailto:styyx09@gmail.com'>Send a Message!</a>
          </motion.div>
          <motion.div className='col1-box2' whileTap={{ scale: 0.7 }}>
            <SiBuymeacoffee style={{fontSize: '2rem', color: 'white'}} />
            <h3 className='contact-page-box-title'>Buy Me Coffee</h3>
            <h5 className='contact-page-box-sub'>Support</h5>
            <a className='contact-page-box-link' href='https://www.buymeacoffee.com/rohitchaudhary'>Let's Go!</a>
          </motion.div>
        </div>
        <div className='contact-page-col2'>
          <div className='col2-box1'>
            <form ref={form} onSubmit={sendEmail} action="">
              <input type="text" className='pop' name='name' placeholder="Your Full Name" required />
              <input type="email" className='pop' name='email' placeholder="Your Email" required />
              <textarea name="message" className='pop' rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn-contactPage'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </SmoothScroll>
    </motion.div>
  )
}

export default ContactPage