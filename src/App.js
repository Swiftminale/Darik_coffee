import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Request from "./components/pages/Request";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/gallery" exact Component={Gallery} />
          <Route path="/request" exact Component={Request} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
