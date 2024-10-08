import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Other components */}
      <Home/>
    </BrowserRouter>
  );
};

export default App;
