import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Other components */}
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blogs/>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
