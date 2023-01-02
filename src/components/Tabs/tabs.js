import React from "react";
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {RiSwordLine} from 'react-icons/ri';
import TabContent from "./TabContent";
import Tab2Content from "./Tab2Content";

const tabs = [
  {
    title: "Skills",
    id: "reservations",
    icon: <RiSwordLine />,
    color: "#11110f",
    content: TabContent
  },
  {
    title: "Works",
    id: "offers",
    icon: <AiOutlineSafetyCertificate />,
    color: "#11110f",
    content: Tab2Content
  }
];

export default tabs;
