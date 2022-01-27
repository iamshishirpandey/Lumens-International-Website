import "./App.css";
import Footer from "./components/common/footer/Footer";
import { Switch } from "react-router";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "animate.css/animate.min.css";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

/* <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/contact">
        <Blog />
      </Route> */
