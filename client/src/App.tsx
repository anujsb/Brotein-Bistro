import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Landing/NavBarLanding";
import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
import Contact from "./components/Landing/Contact";
import Testimonials from "./components/Landing/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="con">
              <NavBar />
              <Hero />
              <About />
              <Testimonials />
              <Contact />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
