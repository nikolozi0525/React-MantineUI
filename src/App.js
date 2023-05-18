import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BusinessProfile from "./pages/BusinessProfile";
import LandingPage from "./layouts/landing";
import Login from "./pages/Login";
import PaymentInfo from "./pages/PaymentInformation";
import Signup from "./pages/Signup";
import SimplePricing from "./pages/SimplePricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<BusinessProfile />} />
          <Route path="/selectprice" element={<SimplePricing />} />
          <Route path="/payInfo" element={<PaymentInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
