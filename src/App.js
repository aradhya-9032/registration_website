import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Features from './components/features/Features';
import Plans from './components/plans/Plans';
import Network from './components/network/Network';
import Reviews  from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
   
    <div className="App">
     <Header/>
     <Main/>
     <Features/>
     <Plans/>
     <Network/>
     <Reviews/>
    <Footer/>
    </div>


    // <div className="App">
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Main />} />
    //     <Route path="/features" element={<Features />} />
    //     <Route path="/plans" element={<Plans />} />
    //     <Route path="/network" element={<Network />} />
    //     <Route path="/reviews" element={<Reviews />} />
    //   </Routes>
    //   <Footer />
    // </div>




    // <Router>
    //    <Routes>
    //      <Route path="/" element={<Header/>}/> 
    //      <Route path="/main" element={<Main/>}/> 
    //      <Route path="/features" element={<Features/>}/> 
    //      <Route path="/plans" element={<Plans/>}/> 
    //      <Route path="/network" element={<Network/>}/> 
    //      <Route path="/reviews" element={<Reviews/>}/> 
    //   </Routes>     
    // </Router>
  );
}

export default App;
