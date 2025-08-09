import React, { useState, useEffect } from 'react';
import AskQuestionModel from './AskQuestionModel';
import ReplyQuestion from './ReplyQuestion';

const QASection = () => {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAnsModel, setShowAnsModel] = useState(false);
  const [replyToIndex, setReplyToIndex] = useState(null);

  const userRole = "admin"; // change this to "user" if needed

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:5000/ques');
        if(!res.ok) throw new Error(`$(res.status)`);
        const data = await res.json();
        setQuestions(data.reverse());
      } catch (err) {
        console.error("Failed to fetch questions", err);
      }
    };

    fetchQuestions();
  }, []);

  const handleAsk = async (data) => {
    try {
      const res = await fetch('http://localhost:5000/ques', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const newQuestion = await res.json();
      setQuestions(prev => [newQuestion, ...prev]);
    } catch (err) {
      console.error("Failed to post question", err);
    }
  };

  const handleReply = async (data) => {
    try {
      const questionId = questions[replyToIndex]._id;
      const password = prompt("Enter admin password");

      const res = await fetch(`http://localhost:5000/ques/answer/${questionId}?password=${password}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: data.answer }),
      });

      if (!res.ok) throw new Error("Unauthorized");

      const updatedQuestion = await res.json();

      setQuestions(prev => {
        const updated = [...prev];
        updated[replyToIndex] = updatedQuestion;
        return updated;
      });

      setReplyToIndex(null);
      setShowAnsModel(false);
    } catch(err) {
      alert("You are not authorized to reply.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="mb-6 text-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
          onClick={() => setShowModal(true)}
        >
          Ask Question
        </button>
      </div>

      <AskQuestionModel
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAsk}
      />

      <div className="space-y-6">
        {questions.map((q, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{q.question}</h4>
            <p className="text-gray-700 mb-2">{q.description}</p>
            <span className="inline-block text-sm text-blue-600 font-medium mb-3">{q.category}</span>

            {(q.answers || []).map((ans, i) => (
              <p key={i} className="text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded mb-2">
                <span className="font-medium">Answer:</span> {ans}
              </p>
            ))}

            {userRole === "admin" && (
              <button
                className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded"
                onClick={() => {
                  setReplyToIndex(idx);
                  setShowAnsModel(true);
                }}
              >
                Reply
              </button>
            )}
          </div>
        ))}
      </div>

      <ReplyQuestion
        visible={showAnsModel}
        onClose={() => setShowAnsModel(false)}
        onSubmit={handleReply}
      />
    </div>
  );
};

export default QASection;
