import logo from './logo.svg';
import './App.css';

import { Routes, Route, NavLink } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
     
    <nav>
      <Navbar />
    </nav>
                         
    <Routes>
      <Route path="/" element={<VendingMachine />}></Route>
      <Route path="soda" element={<Soda />}></Route>
      <Route path="chips" element={<Chips />}></Route>
      <Route path="sardines" element={<Sardines/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
