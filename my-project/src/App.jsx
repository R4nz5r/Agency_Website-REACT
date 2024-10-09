import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Other components */}
      <Home/>
      <Services/>
    </BrowserRouter>
  );
};

export default App;
