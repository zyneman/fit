// src/pages/Login.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submit(e) {
    e.preventDefault();
    //FIXME: The user should be redirected to the dashboard page if the user is logging in for the first time and to the home page if the user is logging in for the second time
    try {
      await axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.message === "Logged in successfully") {
            localStorage.setItem("bookAppointmentUrl", res.data.url);
            navigate("/Dashboard", { state: { id: email } });
          } else if (res.data.message === "Incorrect password") {
            alert("Incorrect password");
          } else if (res.data.message === "Email does not exist") {
            alert("Email does not exist");
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert("An error occurred");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div
      className="Login"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FF9B9B", // Changed the background color
      }}
    >
      <form
        action="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <input
          type="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name=" "
          id=" "
          placeholder="Email"
          style={{ margin: "10px 0", padding: "10px", width: "130%" }}
        />
        <input
          type="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name=" "
          id=" "
          placeholder="Password"
          style={{ margin: "10px 0", padding: "10px", width: "130%" }}
        />
        <input
          type="submit"
          onClick={submit}
          value="Login"
          style={{
            margin: "10px 0",
            padding: "10px",
            width: "130%",
            backgroundColor: "#FFD6A5",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        />
      </form>
      <br />
      <Link
        to="/signup"
        style={{ textAlign: "center", display: "block", color: "#FFD6A5" }}
      >
        Signup
      </Link>
    </div>
  );
}

export default Login;
