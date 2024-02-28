import "./style/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        {/* <Route path="/book" element={<Booking />} /> */}
      </Routes>
    </div>
  );
}

export default App;
