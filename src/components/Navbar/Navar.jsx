import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import dropdownImg from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">

        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="" className="icons" />
        <div className="navbar_profile">
          <img src={profileImg} alt="" className="profile" />
          <img src={dropdownImg} alt="" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navar;
