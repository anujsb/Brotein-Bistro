import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Landing/NavBarLanding";
import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
import Contact from "./components/Landing/Contact";
import Testimonials from "./components/Landing/Testimonials";
import Products from "./components/Landing/Products";
import Mission from "./components/Landing/Mission";
import Footer from "./components/Landing/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <NavBar />
              <Hero />
              <About />
              <Products />
              <Mission />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
