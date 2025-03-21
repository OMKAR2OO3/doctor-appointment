import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Docter from "./pages/Docter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="mx-3 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docter" element={<Docter />} />
          <Route path="/docter/:speciality" element={<Docter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointment" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
