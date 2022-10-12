import React from 'react'
import heroImg from '../../assets/xr.png'
import {BsLightning} from 'react-icons/bs';
import './NavTop.css'
import {MdOutlineDarkMode} from 'react-icons/md';
import { useState } from 'react';
import { ThemeContext, themes } from '../../themeContext';

const NavTop = () => {

    const [ change, setChanged ] = useState(true);

  return (
    <div className="navtop-container">
    <div className='navtop'>
        <div className="row">
            <div className="col">
                <img src={heroImg} alt="me" />
            </div>
            <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div className="col" onClick={() => {
                setChanged(!change);
                changeTheme(change ? themes.light : themes.dark);
                }}>
                {
                    change ? <BsLightning size="3em" /> : <MdOutlineDarkMode size="3em" /> 
                }
                
            </div>
            )}
          </ThemeContext.Consumer>
        </div>
    </div>
    </div>
  )
}

export default NavTop