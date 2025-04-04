import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import isTokenExpired from "./utils/authUtils"; // Utility to check token expiration
import Footer from "./components/Footer"; 
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import StudentSignup from "./components/StudentSignup";
import StaffSignup from "./components/StaffSignup";
import AlumniSignup from "./components/AlumniSignup";
import AdminSignup from "./components/AdminSignup";
import ChooseSignup from "./components/ChooseSignup"; 
import { Box } from "@mui/material";
import AlumniRegistration from "./components/AlumniRegistrationForm";
import AdminApproval from "./components/AdminApproval";
import HomePage from "./components/HomePage";
import ViewProfile from "./components/viewProfile";
import UpdateProfile from "./components/updateProfile";
import Navbar from "./components/NavBar";
import SearchAlumniProfile from "./components/SearchAlumniProfile";
import Gallery from "./components/gallery";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./components/ProtectedRoutes";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import AdminContact from "./components/AdminContact";
import AdminHome from "./components/AdminHome";
import AdminGallery from "./components/Admingallery";
import MentorshipHome from "./components/Mentorship/Home";
import MentorshipGuidelines from "./components/Mentorship/Guidelines";
import MentorshipLogin from "./components/Mentorship/Login";
import MentorshipDashboard from "./components/Mentorship/Dashboard";
import RegistrationForm from "./components/Mentorship/RegistrationForm.jsx";
import Step1 from "./components/Mentorship/step1.jsx";
import Step2 from "./components/Mentorship/step2.jsx";
import Step3 from "./components/Mentorship/step3.jsx";
import Step4 from "./components/Mentorship/step4.jsx";
import Main from "./components/Mentorship/Main.jsx";
import AdminPage from "./components/AdminPage";
import MentorshipChat from "./components/Mentorship/Chat.jsx";

function App() {
  return (
    <Router>
      <AppWithNavBar />
    </Router>
  );
}

function AppWithNavBar() {
  const location = useLocation();

  // ✅ Remove expired token on every page load
  useEffect(() => {
    if (isTokenExpired()) {
      localStorage.removeItem("token");
    }
  }, [location.pathname]); // Runs on route change

  const showNavbarOn = ["/", "/view-profile","/mentorship-home" ,"/login", "/choosesignup","/contact-us","/forgot-password", "/reset-password", "/update-profile", "/events", "/search-alumni", "/gallery"];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {showNavbarOn.includes(location.pathname) && <Navbar />}
      <Box sx={{ flex: 1, mt: showNavbarOn.includes(location.pathname) ? "64px" : "0px" }}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup/student" element={<StudentSignup />} />
          <Route path="/signup/staff" element={<StaffSignup />} />
          <Route path="/signup/alumni" element={<AlumniSignup />} />
          <Route path="/signup/admin" element={<AdminSignup />} />
          <Route path="/choosesignup" element={<ChooseSignup />} />
          <Route path="/alumniregistration" element={<AlumniRegistration />} />
          <Route path="/admin-approval" element={<AdminApproval />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/search-alumni" element={<SearchAlumniProfile />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/admin-contact" element={<AdminContact />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-gallery" element={<AdminGallery />} />
          <Route path="/admin-event" element={<AdminPage />} />
          <Route path="/mentorship" element={<MentorshipHome />} />
          <Route path="/mentorship/guidelines" element={<MentorshipGuidelines />} />
          <Route path="/mentorship/login" element={<MentorshipLogin />}/>
          <Route path="/mentorship/dashboard" element={<MentorshipDashboard />} />
          <Route path="/mentorship/register" element={<RegistrationForm />} />
          <Route path="/mentorship/main" element={<Main />} />
          <Route path="/mentorship/chat/:senderId/:receiverId" element={<MentorshipChat />} />
          
          
          </Route>
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
