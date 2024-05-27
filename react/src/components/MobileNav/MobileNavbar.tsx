// MobileNavBar.js
import './MobileNavbar.css';
import Profile from '../../assets/svg/mobileNavbar_icons/Profile.svg';
import Basket from '../../assets/svg/mobileNavbar_icons/Basket.svg';
import Categories from '../../assets/svg/mobileNavbar_icons/Categories.svg';
import Home from '../../assets/svg/mobileNavbar_icons/Home.svg';

const MobileNavBar = () => {
  return (
    <div className="mobile-nav">
      <a href="#" className="mobile-nav-item">
        <img src={Profile} alt="Profile" />
        <span>پروفایل</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <img src={Basket} alt="Basket" />
        <span>سبد خرید</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <img src={Categories} alt="Categories" />
        <span>دسته‌بندی‌ها</span>
      </a>
      <a href="/" className="mobile-nav-item active">
        <img src={Home} alt="Home" />
        <span>خانه</span>
      </a>
    </div>
  );
};

export default MobileNavBar;
