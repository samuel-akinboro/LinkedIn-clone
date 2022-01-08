import React from 'react'
import '../styles/Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import {NavLink} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
  return (
    <nav>
      <div className="nav__container flex items-center">
        <div className="left__col flex items-center pl-2">
          <div className="logo flex-shrink-0">
            <NavLink to="/" style={{cursor: "pointer"}}>
              <img src="/images/logo.png" alt="linkedIn logo" />
            </NavLink>
          </div>
          <div className="search-box logo flex-shrink-0">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="middle__col flex">
          <NavLink to="/" exact activeClassName="active__nav" className="nav__link group flex flex-col items-center justify-center">
            <HomeIcon />
            <p>Home</p>
            <span>2</span>
          </NavLink>
          <NavLink to="/network" activeClassName="active__nav" className="nav__link group flex flex-col items-center justify-center">
            <SupervisorAccountIcon />
            <p>My Network</p>
          </NavLink>
          <NavLink to="/jobs" activeClassName="active__nav" className="nav__link group flex flex-col items-center justify-center">
            <BusinessCenterIcon />
            <p>Jobs</p>
          </NavLink>
          <NavLink to="/messages" activeClassName="active__nav" className="nav__link group flex flex-col items-center justify-center">
            <MessageIcon />
            <p>Messaging</p>
          </NavLink>
          <NavLink to="/notifications" activeClassName="active__nav" className="nav__link group flex flex-col items-center justify-center">
            <NotificationsIcon />
            <p>Notifications</p>
            <span>32</span>
          </NavLink>
          <div className="nav__link group flex flex-col items-center justify-center">
            <Avatar src="https://pyxis.nymag.com/v1/imgs/c22/b8d/28e2f9cef6a368b08210b53260a94e0933-19-drake.rvertical.w330.jpg" style={{width: "25px", height:  "25px"}}/>
            <p>Me &#9660;</p>
          </div>
        </div>
        <div className="right__col flex items-center justify-around">
        <div className="nav__link group flex flex-col items-center justify-center" style={{borderLeft: "1px solid #e6e6e6"}}>
          <AppsIcon />
          <p>Work &#9660;</p>
        </div>
          <p className="prem-message" style={{color: "#915907", textAlign: "center"}}>Try Premium Free <br /> for 1 Month</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
