// AskQuestionModal.js
import React, { useState } from 'react';

const AskQuestionModel = ({ visible, onClose, onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ question, description, category });
    setQuestion('');
    setDescription('');
    setCategory('');
    onClose();
  };

  if (!visible) return null;

  return (
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
          Question
          <input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            maxLength={90}
            placeholder="Type your question here"
            required
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={300}
            placeholder="Add more context"
          />
        </label>
        <label>
          Category
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Hair fall">Hair fall</option>
            {/* ... etc */}
          </select>
        </label>
        <div className="form-actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Ask</button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionModel;
