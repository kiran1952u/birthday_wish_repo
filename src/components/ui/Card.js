import React from "react";
const Card = ({ message }) => {
    return (
      <div className="card">
        <h2>Happy Birthday!</h2>
        <p>{message}</p>
      </div>
    );
  };
  
export default Card;