import React from 'react';
import Myworld from '../../assets/world.png';
import './network.css';

function Network() {
  return (
    <div>
        <div className='global-container'>
           <h1>Huge Global Network of Fast VPN</h1>
           <p>See LaslesVPN everywhere to make it easier for the when you move locations.</p>
           <img src={Myworld}/>
           <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/sponsored.png'/>
        </div>
    </div>
  )
}

export default Network;