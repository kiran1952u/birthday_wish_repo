
import React, { useState } from 'react';  // Add this import statement


const Textarea = ({ onMessageChange }) => {
    const [message, setMessage] = useState('');
  
    const handleChange = (e) => {
      setMessage(e.target.value);
      onMessageChange(e.target.value);
    };
  
    return (
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Type your birthday message..."
        className="textarea"
      />
    );
  };
  

export default Textarea;