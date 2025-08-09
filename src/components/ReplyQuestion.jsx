import React from 'react'
import { useState } from 'react';

const ReplyQuestion = ({ visible, onClose, onSubmit }) => {
    const [answer, setAnswer] = useState('');
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ answer });
        setAnswer('');
       
        onClose();
      };
    
      if (!visible) return null;
    
  return (
    <div>
            <div className="modal-backdrop" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay with transparency
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000}}>
      <form className="qa-form" onSubmit={handleSubmit} style={{
        backgroundColor: 'white', // ✅ White form background
        color: 'black',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '400px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        <label>
          Answer
          <input
            type="text"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            maxLength={90}
            placeholder="Type your question here"
            required
          />
        </label>
        
       
        <div className="form-actions">
          <button type="submit">Post</button>
          
        </div>
      </form>
    </div>

    </div>
  )
}

export default ReplyQuestion