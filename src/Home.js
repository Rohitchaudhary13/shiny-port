import React from 'react';
import tabs from './components/Tabs/tabs';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import { motion } from 'framer-motion';
import './index.css';
import Marquee from "react-fast-marquee";
import NavTop from './components/Navbar-Top/NavTop';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import TabComponent from './components/Tabs/TabComponent';
import(/* webpackPrefetch: true */ '../src/components/Projects/Projects');

const Home = () => {
  return (
    <motion.div>
      <SmoothScroll>
          <NavTop />
      <div className='container'>
          <Hero />
          </div>
          <div style={{marginTop: '5rem'}}>
          <Marquee className='marquee heading' gradient={false} speed={100} direction="left">
            | React | IONIC | MongoDB | ExpressJs | NodeJs | NextJs | Ethereum | Blockchain
          </Marquee>
          <Marquee className='marquee heading' gradient={false} speed={100} direction="right">
            | React | IONIC | MongoDB | ExpressJs | NodeJs | NextJs | Ethereum | Blockchain
          </Marquee>
          </div>
          <div className='container'>
          <About />
          </div>
          <TabComponent tabs={tabs} />
          <div className='container'>
          <Projects />
          <Testimonials />
          <Contact />
          </div>
          <Footer />
          </SmoothScroll>
    </motion.div>
  )
}
export default Home