import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Other components */}
      <Home/>
      <Services/>
      <About/>
      <Products/>
    </BrowserRouter>
  );
};

export default App;
