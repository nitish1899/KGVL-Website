import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { ContactUs } from "./pages/ContactUs";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import SocialMedia from "./pages/SocialMedia";
import PaymentSuccess from "./pages/paymentSuccess";
import Distrubuter from "./pages/Distrubuter";
import { MissionVision } from "./components/MissionVision";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { PrivacyPolicy } from "./components/PrivacyPolicy";


const App = () => {
  const media = { mobile: "768px", tab: "998px" };
  return(
    <div >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/paymentsuccess" element={< PaymentSuccess />}  />
      <Route path="/distribution" element={<  Distrubuter />}   />
      <Route path="/socialmedia" element={<  SocialMedia />}   />
      <Route path="/MissionVision" element={<  MissionVision />}   />
      <Route path="/Termsandconditions" element={<  TermsAndConditions />}   />
      <Route path="/Privacypolicy" element={<  PrivacyPolicy />}   />
      
    </Routes>
    <Footer/>
    
    </div>
  )
};

export default App;
