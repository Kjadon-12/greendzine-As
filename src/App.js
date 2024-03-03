// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login/Login";
import Home from "./screen/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
