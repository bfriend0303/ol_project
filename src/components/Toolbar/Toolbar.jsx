import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import homeLogo from '../../images/homeLogo.png';
import { FaBars } from 'react-icons/fa';

const DEFAULT_CLASSES = ['main-nav', 'user-actions'];

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [classes, setClasses] = useState(DEFAULT_CLASSES);

  function handleToggle() {
    isOpen ? setClasses(DEFAULT_CLASSES) : getOpenClasses();
    setIsOpen(!isOpen);
  }

  function getOpenClasses() {
    setClasses(
      DEFAULT_CLASSES.map(className => {
        return `${className} open`;
      })
    );
  }

  return (
    <header id='toolbar'>
      <nav className='navbar'>
        <ul className='nav-links'>
          <span className='icons'>
            <Link to='/' className='logo'>
              <img src={homeLogo} alt='oneleif logo' />
            </Link>
            <FaBars className='toggle' onClick={handleToggle} />
          </span>

          {/* Main links  */}
          <span className={classes[0]}>
            <li>
              <NavLink to='/contact-us' activeClassName='active-link'>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to='/active-projects' activeClassName='active-link'>
                Active Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/meet-the-team' activeClassName='active-link'>
                Meet the Team
              </NavLink>
            </li>
          </span>

          {/* TODO: v-2 User links */}
          {/* <span className={classes[1]}>
            <li>
              <NavLink to='/login' activeClassName='active-link'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/signup' activeClassName='active-link'>
                Signup
              </NavLink>
            </li>
          </span> */}
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Toolbar);
