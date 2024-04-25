import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <footer className='footer-content'>
          <div className='footer-first'>
              <div className='footer-logo'>
                <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/logo.svg'/>   
                  <span style={{fontWeight:"500",marginTop:"10px", fontSize:"18px"}}>&nbsp;Lasles</span><sapn style={{fontWeight:"800", marginTop:"10px", fontSize:"18px"}}>VPN</sapn>
              </div>
              <span className='footer-logo-text'>LaslesVPN</span><span className='footer-span-text'>&nbsp;is a private virtual network that has unique features<span>and has high security.</span></span>
              <div class="social">
                  <img alt="fb" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/facebook.svg"/>
                  <img alt="tw" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/twitter.svg"/>
                  <img alt="ig" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/instagram.svg"/>
      
                  <small className='small'>©2020LaslesVPN</small>
              </div>
          </div>

          <div className='footer-second'>
              <h4 className='footer-small-title'>Product</h4>
              
                  <h6 className='footer-p'>Download</h6>
                  <h6 className='footer-p'>Pricing</h6>
                  <h6 className='footer-p'>Locations</h6>
                  <h6 className='footer-p'>Server</h6>
                  <h6 className='footer-p'>Countries</h6>
                  <h6 className='footer-p'>Blog</h6>
            
          </div>

          <div className='footer-second'>
           <h4 className='footer-small-title'>Engage</h4>
               <h6 className='footer-p'>LaslesVPN ?</h6>
               <h6 className='footer-p'>FAQ</h6>
               <h6 className='footer-p'>Tutorials</h6>
               <h6 className='footer-p'>About Us</h6>
               <h6 className='footer-p'>Privacy Policy</h6>
               <h6 className='footer-p'>Terms of Service</h6>
      
          </div>

        <div className='footer-second'>
          <h4 className='footer-small-title'>Earn Money</h4>
        
            <h6 className='footer-p'>Affipate</h6>
            <h6 className='footer-p'>Become Partner</h6>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer;