import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import {TbHome2} from 'react-icons/tb';
import {IoPersonOutline} from 'react-icons/io5';
import {AiOutlineAppstore} from 'react-icons/ai';
import {MdOutlineForum} from 'react-icons/md';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-list'>
          <div className='nav-listItem'><NavLink to="/" style={{textDecoration: 'none', color: '#7351c4'}}><TbHome2 size="1.5em" className='scale' /></NavLink></div>
          <div className='nav-listItem'><NavLink to="/about" style={{textDecoration: 'none', color: '#7351c4'}}><IoPersonOutline size="1.5em" className='scale' /></NavLink></div>
          <div className='nav-listItem'><NavLink to="/projects" style={{textDecoration: 'none', color: '#7351c4'}}><AiOutlineAppstore size="1.5em" className='scale' /></NavLink></div>
          <div className='nav-listItem'><NavLink to="/contact" style={{textDecoration: 'none', color: '#7351c4'}}><MdOutlineForum size="1.5em" className='scale' /></NavLink></div>
        </div>
    </div>
  )
}

export default Navbar