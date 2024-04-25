import React from 'react';
import Mylap from '../../assets/lap.png'
import './main.css';

function Main() {
  return (
    <div className='main-container'>
        <div className='first-div'>
           <div className='first-left-text'>
             <h1> Want anything to be <br/> easy with <strong>LaslesVPN</strong></h1>
             
             <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
             <button className='get-btn'>Get Started</button>
           </div>
           <div className='first-right-img'>
              <img src={Mylap}/>
           </div>
        </div>
        <div class="card-group">
                        <div class="card">
                            <div class="icon">
                                <img src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/user.svg" alt="90+"/>
                            </div>
                            <div class="content">
                                <span class="title">90+</span>
                                <span class="subtitle">Users</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <img src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/location.svg" alt="30+"/>
                            </div>
                            <div class="content">
                                <span class="title">30+</span>
                                <span class="subtitle">Locations</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <img src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/server.svg" alt="50+"/>
                            </div>
                            <div class="content">
                                <span class="title">50+</span>
                                <span class="subtitle">Servers</span>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default Main