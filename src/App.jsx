import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing/Landing";
import { AnimatePresence } from "framer-motion";
import Intro from "./pages/Intro/Intro";
import ScanOptions from "./pages/ScanOptions/ScanOptions";

function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/scan-options" element={<ScanOptions />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <Router>
      <AnimateRoutes />
    </Router>
  );
};

export default App;
