import React, { useState } from "react";
import "./SignIn.css"

const SignInModal = ({ setUserName, setIsModalOpen }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setIsModalOpen(false);
    setUserName(name);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", width: "40%", height: "350px",}}>
      <div>
      <h1 style={{margin: "2px"}}>Welcome to Chatsy!</h1>
    <hr size="5" style={{background:"#078377"}}/>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "12px"}}>
        <input
        style={{height: "40px", marginBottom: "8px"}}
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="sign-in"  disabled={!name} type="submit" onClick={handleSubmit}>
          Sign In
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
