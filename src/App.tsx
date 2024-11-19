import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Lenis from "@studio-freight/lenis";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsAndCondition from "./pages/TermsAndConditionPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/ContactUs";
import Cancellation from "./pages/CancellationAndRefunds";

import "./index.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
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
