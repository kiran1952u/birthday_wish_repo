import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti"; // Importing the confetti package
import "../styles.css"; 

export default function SurprisePage() {
  const navigate = useNavigate(); // Hook for navigation
  const [showMessage, setShowMessage] = useState(true); // ✅ Define showMessage state
  const [isExploding, setIsExploding] = useState(true); // Trigger confetti explosion

  return (
    <div className="container">
      {/* Confetti Effect */}
      {isExploding && <ReactConfetti />}

      <h1 className="heading">🎂 Happy Birthday! 🎂</h1>
      <p className="message-text">
        Wishing you joy, success, and endless happiness. Have a fantastic day! 🎁🎊
      </p>

      {/* 🎈 Balloons Animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="balloons"
          style={{ left: `${10 + i * 15}%` }}
          animate={{ y: [-10, -400], opacity: [1, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}

      {/* 🎇 Firecrackers Animation */}
      <div className="fireworks">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="firework"
            style={{ left: `${Math.random() * 80 + 10}%` }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: [0, 1, 0], y: [-50, 0, -50] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          >
            🎆🎇
          </motion.div>
        ))}
      </div>

      {/* 🎁 Birthday Message Box */}
      {showMessage && (
        <motion.div
          className="message-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 👤 CEO Image */}
          <motion.img
            src="/namita_new.jpg"
            alt="CEO"
            className="ceo-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* 🎂 Birthday Message */}
          <h2 className="message-title">🎂 Happy Birthday! 🎂</h2>
          <p className="message-text">
          Happy Birthday, Namita ma'am!  Your leadership and vision have inspired us to achieve greatness. We are grateful for your hard work and dedication towards making our company a success. May this year bring you more success, happiness, and fulfillment.! 🎁🎊
          </p>
        </motion.div>
      )}

      {/* Back Button */}
      <button className="kiran" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}
