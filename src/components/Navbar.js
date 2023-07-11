// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = ({ userId, token }) => {
  const [currentUserId, setCurrentUserId] = useState(userId);
  const [currentUserToken, setCurrentUserToken] = useState(token);

  useEffect(() => {
    setCurrentUserId(userId);
    setCurrentUserToken(token);
  }, [userId, token]);

  const bookAppointmentUrl = window.localStorage.getItem("bookAppointmentUrl");

  const linkStyle = {
    textDecoration: "none",
    color: "#FFFFFF",
    transition: "0.3s",
    ":hover": {
      color: "#0093f7",
    },
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    gap: { sm: "123px", xs: "40px" },
    mt: { sm: "32px", xs: "20px" },
    backgroundColor: '#FF9B9B', // Changed the background color
    padding: "20px",
  };

  const logoStyle = {
    width: "48px",
    height: "48px",
    margin: "0px 20px",
  };

  const loginButtonStyle = {
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "#FFD6A5",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "0.3s",
    ":hover": {
      backgroundColor: "#0093f7",
    },
  };

  return (
    <Stack direction="row" sx={navbarStyle}>
      <Link to="/">
        <img src={Logo} alt="logo" style={logoStyle} />
      </Link>
      <Stack direction="row" gap="40px">
        <Link to="/Services" style={linkStyle}>
          Services
        </Link>
        <Link to="/About" style={linkStyle}>
          About
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/FAQ" style={linkStyle}>
          FAQ
        </Link>
        <Link to="/Dashboard" style={linkStyle}>
          Dashboard
        </Link>
        <Link to={bookAppointmentUrl} style={linkStyle}>
          Book Appointment
        </Link>
      </Stack>
      <a href="/Login" style={loginButtonStyle}>
        Login
      </a>
    </Stack>
  );
};

export default Navbar;
