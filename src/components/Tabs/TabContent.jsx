import React from "react";
import { motion } from "framer-motion";
import {TbBrandReactNative} from 'react-icons/tb';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiSolidity} from 'react-icons/si';
import {FaHardHat} from 'react-icons/fa';
import {SiEthereum} from 'react-icons/si';
import {SiIonic} from 'react-icons/si';

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
    text: "ReactJs",
    image: <TbBrandReactNative size="2rem" />,
  }, 
  {
    text: "NextJs",
    image: <TbBrandNextjs size="2rem" />,
  }, 
  {
    text: "Solidity",
    image: <SiSolidity size="2rem" />,
  }, 
  {
    text: "Ionic",
    image: <SiIonic size="2rem" />,
  },
  {
    text: "HardHat",
    image: <FaHardHat size="2rem" />,
  },
  {
    text: "Ethereum",
    image: <SiEthereum size="2rem" />,
  }

];


  

const TabContent = ({ id, active }) => (
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

export default TabContent;
