import React from 'react';
import Myspringle from '../../assets/springle.png';
import './features.css';


function Features() {
  return (
    <div>
        <div className='features'>
            <div className='feature-img'>
            <img src={Myspringle}/>
            </div>
            <div className='feature-text'>
               <h3>We Provide Many Features You Can</h3>
               <strong>Use</strong>
               <p className='sub-title'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <div slot="content" class="check">
                   <img alt="check" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/check.svg"/><span>Powerfull online protection.</span>
                </div>
                <div slot="content" class="check">
                  <img alt="check" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/check.svg"/><span>Internet without borders.</span>
                </div>
                <div slot="content" class="check">
                  <img alt="check" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/check.svg"/><span>No specific time limits.</span>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Features