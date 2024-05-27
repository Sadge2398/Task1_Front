import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/svg/Logo.svg";
import Heart from "../../assets/svg/tools_icons/Heart.svg";
import Basket from "../../assets/svg/tools_icons/Basket.svg";
import Profile from "../../assets/svg/tools_icons/Profile.svg";
import Hamburger from "../../assets/svg/HamIcon.svg";
import Search from "../../assets/svg/Search.svg";
import Shop from "../../assets/svg/product_icons/Shop.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (<>
    <header className="header">
      <a href="/">
        <img src={Logo} alt="Logo" className="logo" width={105} height={50} />
      </a>
      <nav className={`nav ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">داستان ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>
      <div className="tools">
        <a href="#" className="icon">
          <img src={Profile} alt="Profile" />
        </a>
        <a href="#" className="icon">
          <img src={Heart} alt="Heart" />
        </a>
        <a href="#" className="icon">
          <img src={Basket} alt="Basket" />
        </a>
      </div>
      <div className="hamburger">
        <button type="button" title="HamButton" onClick={toggleMenu}>
          <img src={Hamburger} alt="Hamburger Icon" />
        </button>
        <div>
          <img src={Search} alt="Search Icon" />
        </div>
      </div>
     
    </header>
     {showMenu && (
      <div className="hamburger-menu">
        <ul>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">داستان ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">
              <span>
                <img src={Shop} alt="" />
              </span>
              فروشنده شوید!
            </a>
          </li>
        </ul>
      </div>
    )}
  </>);
};

export default Navbar;
