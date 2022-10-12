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
    color: "#7351c4",
    content: TabContent
  },
  {
    title: "Works",
    id: "offers",
    icon: <AiOutlineSafetyCertificate />,
    color: "#7351c4",
    content: Tab2Content
  }
];

export default tabs;
