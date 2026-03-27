import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/common/Navbar";
import FullScreenNav from "./components/common/FullScreenNav";
import { ReactLenis } from "lenis/react";
import Gallary from "./pages/Gallary";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <ReactLenis root />
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
      </Routes>
    </div>
  );
};

export default App;
