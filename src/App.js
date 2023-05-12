import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
