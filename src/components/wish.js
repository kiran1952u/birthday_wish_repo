import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactConfetti from "react-confetti"; // New confetti package
import "../styles.css";

export default function Wish() {
  const navigate = useNavigate();
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = () => {
    setIsExploding(true);
    setTimeout(() => navigate("/surprise"), 1500);
  };

  return (
    <div className="container">
      <h1 className="heading">🎉 Special Wish 🎉</h1>
      <p className="subheading">Click the button for a surprise!</p>

      {/* Confetti Effect */}
      {isExploding && <ReactConfetti />}

      <button className="kiran" onClick={handleClick}>
        Click on this button
      </button>
    </div>
  );
}