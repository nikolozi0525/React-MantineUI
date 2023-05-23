import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BusinessProfile from "./pages/BusinessProfile";
import Dashboard from "./pages/Home/Dashboard";
import Facility from "./pages/Home/Facility";
import FacilityType from "./pages/Home/FacilityType";
import Home from "./pages/Home";
import LandingPage from "./layouts/landing";
import Login from "./pages/Login";
import NoteType from "./pages/Home/NoteType";
import Patient from "./pages/Home/Patient";
import PaymentInfo from "./pages/PaymentInformation";
import Reports from "./pages/Home/Report";
import Setting from "./pages/Home/Setting";
import Signup from "./pages/Signup";
import SimplePricing from "./pages/SimplePricing";
import Staff from "./pages/Home/Staff";

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
          <Route path="/home" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="facility" element={<Facility />}></Route>
            <Route path="facilitytype" element={<FacilityType />} />
            <Route path="staff" element={<Staff />} />
            <Route path="report" element={<Reports />} />
            <Route path="patient" element={<Patient />} />
            <Route path="note" element={<Dashboard />} />
            <Route path="notetype" element={<NoteType />} />
            <Route path="settings" element={<Setting />} />
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
