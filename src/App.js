import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BusinessProfile from "./pages/BusinessProfile";
import Dashboard from "./pages/Dashboard";
import Facility from "./pages/Facility";
import FacilityType from "./pages/FacilityType";
import LandingPage from "./layouts/landing";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import PaymentInfo from "./pages/PaymentInformation";
import Signup from "./pages/Signup";
import SimplePricing from "./pages/SimplePricing";
import Staff from "./pages/Staff";

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
          <Route path="/facilitytype" element={<FacilityType />} />
          <Route path="/facility" element={<Facility />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/report" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/note" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
