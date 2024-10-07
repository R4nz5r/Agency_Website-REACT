import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Other components */}
    </BrowserRouter>
  );
};

export default App;
