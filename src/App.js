import './App.css';
import { Route, Routes } from "react-router-dom";
import Stocks from "./pages/Stocks"
import Home from "./pages/Home"
import About from "./pages/About"
import Price from "./pages/Price"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stocks' element={<Stocks/>} />
        <Route path='/stocks/:symbol' element={<Price/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
