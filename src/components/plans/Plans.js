import React from 'react';
import Mybox from '../../assets/box.png';
import './plans.css';

function Plans() {
  return (
    <div className='plan-container'>
        <div className='plan-text'>
           <h2>Choose Your plan</h2>
           <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
      <div className='plan-boxs'>
        <div className='boxs'>
          <div className='box'>
               <img src={Mybox}/>
                <h4>Free Plan</h4>
          </div>
          <div className='free-plans'>
            <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Unlimited Bandwitch</span>
            </div>
          <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Encrypted Connection</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>No Traffic Logs</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Works on All Devices</span>
          </div>
          </div>
          <div className='plan-footer'>
              <h5>Free</h5>
              <button className='select-btn'>Select</button>
          </div>
        </div>

        <div className='boxs'>
          <div className='box'>
               <img src={Mybox}/>
                <h4>Standard Plan</h4>
          </div>
          <div className='free-plans'>
            <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Unlimited Bandwitch</span>
            </div>
          <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Encrypted Connection</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>No Traffic Logs</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Works on All Devices</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Connect Anywere</span>
          </div>
          </div>
          <div className='plan-footer'>
              <h5>$9 <span style={{color:"grey", fontSize:"25px",fontWeight:"600"}}>/ mo</span></h5>
              <button className='select-btn'>Select</button>
          </div>
        </div>

        <div className='boxs'>
          <div className='box'>
               <img src={Mybox}/>
                <h4>Premium Plan</h4>
          </div>
          <div className='free-plans'>
            <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Unlimited Bandwitch</span>
            </div>
          <div className='tick'>
              <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Encrypted Connection</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>No Traffic Logs</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Works on All Devices</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Connect Anywere</span>
          </div>
          <div className='tick'>
             <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/check-nobg.svg'/> <span>Get New Features</span>
          </div>
          </div>
          <div className='plan-footer'>
              <h5>$12 <span style={{color:"grey", fontSize:"25px",fontWeight:"600"}}>/ mo</span></h5>
              <button className='select-btn'>Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans