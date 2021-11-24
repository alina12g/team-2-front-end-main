import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Gelato from "./Components/Pages/Gelato";
import GelatoSpecial from "./Components/Pages/GelatoSpecial";
import Donuts from "./Components/Pages/Donuts";
import DonutsSpecial from "./Components/Pages/DonutsSpecial";
import Account from "./Components/Pages/Account";
import Basket from "./Components/Pages/Basket";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/gelato" element={<Gelato />} />

          <Route path="/gelatoSpecial" element={<GelatoSpecial />} />

          <Route path="/donuts" element={<Donuts />} />

          <Route path="/donutsSpecial" element={<DonutsSpecial />} />

          <Route path="/account" element={<Account />} />

          <Route path="/basket" element={<Basket />} />

          <Route path="*" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
