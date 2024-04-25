// import React from 'react'
// import './header.css';

// function Header() {
//   return (
//     <div className='header-container'>
//        <nav>
//           <div className='logo-container'>
//             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/logo.svg' className='logo'/>   
//             &nbsp; &nbsp;<span style={{fontWeight:"500", fontSize:"18px"}}>Lasles</span><sapn style={{fontWeight:"800", fontSize:"18px"}}>VPN</sapn>
//           </div>
//           <div>
//             <ul>
//               <li><a href='#about'/>About</li>
//               <li><a href='#features'/>Features</li>
//               <li><a href='#pricing'/>Pricing</li>
//               <li><a href='#testimonials'/>Testimonials</li>
//               <li><a href='#help'/>Help</li>
//             </ul>
//           </div>
//           <div className='sing-btns'>
//             <a className='sign-in'>Sing In </a>
//             <button className='sign-up'>Sing Up</button>
//           </div>
//        </nav>
//     </div>
//   )
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import './header.css'; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeItem, setActiveItem] = useState('about');
  // Function to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  //logic for active li tags
  const handleItemClick = (item) => {
    setActiveItem(item);
    smoothScroll(item);
  };

  // Smooth scroll function
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };


  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
          <div className='logo-container'>
                 <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/logo.svg' className='logo'/>   
                 &nbsp; &nbsp;<span style={{fontWeight:"500", fontSize:"18px"}}>Lasles</span><sapn style={{fontWeight:"800", fontSize:"18px"}}>VPN</sapn>
          </div>
      <div className="middle">
      <ul>
      <li className={activeItem === 'about' ? 'active' : ''}><a href='#about' onClick={() => handleItemClick('about')}>About</a></li>
      <li className={activeItem === 'features' ? 'active' : ''}><a href='#features' onClick={() => handleItemClick('features')}>Features</a></li>
      <li className={activeItem === 'pricing' ? 'active' : ''}><a href='#pricing' onClick={() => handleItemClick('pricing')}>Pricing</a></li>
      <li className={activeItem === 'testimonials' ? 'active' : ''}><a href='#testimonials' onClick={() => handleItemClick('testimonials')}>Testimonials</a></li>
      <li className={activeItem === 'help' ? 'active' : ''}><a href='#help' onClick={() => handleItemClick('help')}>Help</a></li>
    </ul>
                   
      </div>
      <div className='sing-btns'>
        <a className='sign-in'>Sing In </a>
        <button className='sign-up'>Sing Up</button>
      </div>
    </nav>
  );
};

export default Header;
