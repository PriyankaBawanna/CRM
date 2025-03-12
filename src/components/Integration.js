import React, { useState } from "react";
import Header from "./Header";
import Card from "../commonComponet/Card";
import Modal from "../commonComponet/Model";
import toast, { Toaster } from "react-hot-toast";

const Integration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // ✅ Email Validation Regex (Covers all possible cases)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(emailRegex.test(inputEmail)); // Validate email
  };

  const handleSubmit = () => {
    if (isValid && email) {
      toast.success("Thank You! Invitation Sent.");
      setEmail(""); // Reset input
      setIsModalOpen(false); // Close modal
    } else {
      toast.error("Invalid Email! Please enter a valid email.");
    }
  };

  return (
    <div className="integrationContainer">
      <Header />

      <div className="integrationPage">
        <div className="headingStyle">Add Integrations</div>
      </div>

      {/* Invite Members Button */}
      <div className="buttonContainer">
        <button className="inviteButton" onClick={() => setIsModalOpen(true)}>
          + Invite Members
        </button>
      </div>

      <Card />

      {/* Reusable Modal with Email Input */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Invite Members">
        <input
          type="text"
          placeholder="Enter email"
          className={`inputField ${isValid ? "" : "error"}`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isValid && <p className="error-message">Invalid email format!</p>}
        <button className="submitButton" onClick={handleSubmit}>
         Invitation
        </button>
      </Modal>

      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Integration;
