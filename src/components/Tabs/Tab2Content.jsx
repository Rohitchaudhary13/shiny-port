import React from "react";
import { motion } from "framer-motion";
import {SiTwilio} from 'react-icons/si';
import {SiHackster} from 'react-icons/si';
const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: "none"
  }
};

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};

const cards = [
  {
    text: "Hacktoberfest 2022",
    image: <SiHackster size="2rem" />,
  }, 
  {
    text: "HackSquad [OpenSource]",
    image: <SiHackster size="2rem" />,
  }, 
  {
    text: "AthenaSquare [Hackathon]",
    image: <SiHackster size="2rem" />,
  }, 
  {
    text: "Twillio's Champion Event",
    image: <SiTwilio size="2rem" />,
  },
  {
    text: "Hack The Mountain",
    image: <SiHackster size="2rem" />,
  },

];


  

const Tab2Content = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="cards">
      {cards.map((item, index) => (
        <motion.div key={index} variants={cardVariant} className="content-card">
          <button class="button-with-icon btn btn-light">
          {item.image}
              <div class="button-with-icon__label">{`${item.text}`}</div>
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Tab2Content;
