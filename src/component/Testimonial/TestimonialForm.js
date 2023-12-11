import React, { useState } from 'react';

const TestimonialForm = () => {
  // State variables for form inputs and validation messages
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [feedback, setFeedback] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for required fields
    if (email === '' || name === '' || designation === '' || feedback === '') {
      setValidationMessage('Please fill in all fields.');
      return;
    }

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationMessage('Please enter a valid email address.');
      return;
    }

    // Additional custom validations can be added here

    // If all validations pass, submit the form (you can replace this with your actual form submission logic)
    setValidationMessage(''); 
    // Clear validation message
    setEmail("");
    setName("");
    setDesignation("");
    setFeedback("");
    setValidationMessage("");
    alert('Form submitted successfully!');
  };

  return (
    <>
      <form
        style={{
          padding: '10px 10px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        id="contact-form"
        name="contact-form"
        action="./testimonial.html"
        onSubmit={handleSubmit} // Use onSubmit instead of onclick
      >
        <span>
          <h2 style={{ paddingTop: '30px' }}>Feedback</h2>
          <h5 style={{ textAlign: 'center' }}>
            Please submit your feedback
          </h5>
        </span>
        {validationMessage && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {validationMessage}
          </div>
        )}
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your Name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="designation">Your Designation</label>
          <input
            type="text"
            className="form-control"
            id="designation"
            placeholder="Enter your Designation here..."
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ width: '50%' }}>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            type="text"
            id="feedback"
            className="form-control"
            rows="3"
            cols="5"
            placeholder="Enter your Feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default TestimonialForm;
