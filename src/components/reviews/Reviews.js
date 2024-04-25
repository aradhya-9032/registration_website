// import React, { useState } from 'react';
// import './reviews.css'; 

// const Review = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const reviews = [
//     { name: "John Doe", country: "USA", stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { name: "Jane Smith", country: "Canada", stars: 4, text: "Nulla facilisi. Integer nec enim ac justo fermentum dignissim." },
//   ];

//   const handlePrev = () => {
//     setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
//   };

//   const handleNext = () => {
//     setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
//   };

//   return (
//     <div className="review-container">
//       <div className="heading">
//         <h3>Trusted by Thousands of Happy Customers</h3>
//       </div>
//       <div className="review-boxes">
//         <div className={`arrow prev ${activeIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>&#8249;</div>
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className={`review-box ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             {review}
//           </div>
//         ))}
//         <div className={`arrow next ${activeIndex === reviews.length - 1 ? 'disabled' : ''}`} onClick={handleNext}>&#8250;</div>
//       </div>
//     </div>
//   );
// };

// export default Review;




import React, { useState } from 'react';
import './reviews.css';

// const reviews = [
//   { name: "John Doe", country: "USA", stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   { name: "Jane Smith", country: "Canada", stars: 4, text: "Nulla facilisi. Integer nec enim ac justo fermentum dignissim." },
//   { name: "John Doe", country: "USA", stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   { name: "Jane Smith", country: "Canada", stars: 4, text: "Nulla facilisi. Integer nec enim ac justo fermentum dignissim." },
 
// ];

function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  return(
    <div class="container">
                <div class="reviews">
                        <div index="0" class="review active">
                            <div class="header">
                                <img class="profile" alt="profile" src="https://randomuser.me/api/portraits/men/79.jpg"/>
                                <div class="info">
                                    <span class="title">Erasmo Schumm</span>
                                    <span class="subtitle">Moenchester, United States</span>
                                </div>
                                <div class="score">4.1
                                    <img alt="star" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/star.svg"/>
                                </div>
                            </div>

                            <div class="content">Lasles VPN has been an exceptional choice for my online privacy needs. With its fast servers and user-friendly interface, I can browse the internet securely and enjoy unrestricted access to geo-blocked websites. Moreover, the robust encryption ensures that my data remains protected at all times.
                            </div>
                        </div>
                        <div index="1" class="review ">
                            <div class="header">
                                <img class="profile" alt="profile" src="https://randomuser.me/api/portraits/women/7.jpg"/>
                                <div class="info">
                                    <span class="title">Jeana Shields</span>
                                    <span class="subtitle">Favborough, United States</span>
                                </div>
                                <div class="score">4.7
                                    <img alt="star" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/star.svg"/>
                                </div>
                            </div>

                            <div class="content">Lasles VPN is an exceptional provider. I've had a positive experience with their fast connection, unlimited bandwidth, and top-notch security features.It's user-friendly and reliable, ensuring my online privacy.
                            </div>
                        </div>
                        <div index="2" class="review ">
                            <div class="header">
                                <img class="profile" alt="profile" src="https://randomuser.me/api/portraits/women/79.jpg"/>
                                <div class="info">
                                    <span class="title">Misha Leffler</span>
                                    <span class="subtitle">Tannastad, Poland</span>
                                </div>
                                <div class="score">3.9
                                    <img alt="star" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/star.svg"/>
                                </div>
                            </div>

                            <div class="content">Lasles VPN has exceeded my expectations with its exceptional service and strong security features. The connection is fast, stable, and provides an excellent level of protection for my online activities.
                            </div>
                        </div>
                        <div index="3" class="review ">
                            <div class="header">
                                <img class="profile" alt="profile" src="https://randomuser.me/api/portraits/men/34.jpg"/>
                                <div class="info">
                                    <span class="title">Francais Von Rueden</span>
                                    <span class="subtitle">Utrecht, Netherlands</span>
                                </div>
                                <div class="score">4.2
                                    <img alt="star" src="https://lasles-vpn-lit-100ferhas.vercel.app/assets/star.svg"/>
                                </div>
                            </div>

                            <div class="content">I've been using Lasles VPN for a while now, and it has been an absolute game-changer for my online security and privacy needs. The connection speed is top-notch, and the interface is user-friendly. With strong encryption and a wide range of servers to choose from, Lasles VPN ensures I can browse the web with peace of mind.
                            </div>
                        </div>
                        
                </div>

                <div class="controls">
                    <div class="selector">
                            <span class="select "></span>
                            <span class="select "></span>
                            <span class="select active"></span>
                            <span class="select "></span>
                            <span class="select "></span>
                            <span class="select "></span>
                    </div>

                    <div>
                        <button className="primary">
                        <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/arrow-back.svg' className='icon-button primary' alt='icon'/>
                        </button>
                        <button className="primary">
                        <img src='https://lasles-vpn-lit-100ferhas.vercel.app/assets/arrow-forward.svg' className='icon-button primary' alt='icon'/>
                        </button>
                    </div>
                </div>
                <section class="subscribe">
          <div class="content">
            <span class="title-small">Subscribe Now for Get Special Features!</span>
            <span class="subtitle">Let's subscribe with us and find the fun.</span>
          </div>
          <button class="button" type="accent" shape="square">Subscribe Now</button>
        </section>
            </div>
  )


}
//   const handlePrev = () => {
//     setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
//   };

//   const handleNext = () => {
//     setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
//   };

//   return (
//     <div className="review-container">
//       <div className="heading">
//         <h3>Trusted by Thousands of Happy Customers</h3>
//       </div>
//       <div className="review-boxes">
//         <div className={`arrow prev ${activeIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>&#8249;</div>
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className={`review-box ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div className="left">
//               <img src="placeholder.jpg" alt="Profile" />
//             </div>
//             <div className="middle">
//               <h2>{review.name}</h2>
//               <p>{review.country}</p>
//               <div className="stars">
//                 {Array.from({ length: review.stars }, (_, i) => (
//                   <span key={i}>&#9733;</span>
//                 ))}
//               </div>
//             </div>
//             <div className="right">
//               <p>{review.text}</p>
//             </div>
//           </div>
//         ))}
//         <div className={`arrow next ${activeIndex === reviews.length - 1 ? 'disabled' : ''}`} onClick={handleNext}>&#8250;</div>
//       </div>
//     </div>
//   );
// }

export default Reviews;



// import React, { useState } from 'react';
// import './reviews.css';

// const reviews = [
//   { name: "John Doe", country: "USA", stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   { name: "Jane Smith", country: "Canada", stars: 4, text: "Nulla facilisi. Integer nec enim ac justo fermentum dignissim." },
//   { name: "John Doe", country: "USA", stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//   { name: "Jane Smith", country: "Canada", stars: 4, text: "Nulla facilisi. Integer nec enim ac justo fermentum dignissim." },
  
// ];

// function Reviews() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
//   };

//   const handleNext = () => {
//     setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
//   };

//   const handleReviewClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="review-container">
//       <div className="heading">
//         <h3>Trusted by Thousands of Happy Customers</h3>
//       </div>
//       <div className="review-boxes" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//         {reviews.map((review, index) => (
//           <div key={index} className="review-box">
//             <div className="left">
//               <img src="placeholder.jpg" alt="Profile" />
//             </div>
//             <div className="middle">
//               <div className="review-info" onClick={() => handleReviewClick(index)}>
//                 <h2>{review.name}</h2>
//                 <p>{review.country}</p>
//               </div>
//               <div className="stars">
//                 {Array.from({ length: review.stars }, (_, i) => (
//                   <span key={i}>&#9733;</span>
//                 ))}
//               </div>
//             </div>
//             <div className="right">
//               <p>{review.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="arrows">
//         <div className="arrow prev" onClick={handlePrev}>&#8249;</div>
//         <div className="arrow next" onClick={handleNext}>&#8250;</div>
//       </div>
//     </div>
//   );
// }

// export default Reviews;











































