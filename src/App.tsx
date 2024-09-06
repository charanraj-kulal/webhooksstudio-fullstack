import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsAndCondition from "./pages/TermsAndConditionPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/ContactUs";
import Cancellation from "./pages/CancellationAndRefunds";

import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/Cancellation-and-refund-policy"
            element={<Cancellation />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
