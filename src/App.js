import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Service from "./pages/Service";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
