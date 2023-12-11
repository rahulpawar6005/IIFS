import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [validationMessage, setValidationMessage] = useState('');


  const validateForm =  (e) => {
    e.preventDefault();

    // Basic validation for required fields
    
  // Basic validation for required fields
  if (email === '' || name === '' || subject === '' || message === '') {
    setValidationMessage('Please fill in all fields.');
    return;
  }

  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setValidationMessage('Please enter a valid email address.');
    return;
  }

    // If all validations pass, submit the form (you can replace this with your actual form submission logic)
    setValidationMessage(''); 
    // Clear validation message
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    alert('Form submitted successfully!');

}
  return (
    <>
      <section className="contact-container">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        {validationMessage && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {validationMessage}
          </div>
        )}
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5" style={{ marginTop: "30px" }}>
            <form
              id="contact-form"
              name="contact-form"
              onSubmit={validateForm}
              
            >
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" style={{ marginTop: "20px" }}>
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" style={{ marginTop: "20px" }}>
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left btn-container">
                <button
                  className="btn btn-primary custom-submit-btn"
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </form>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
            <span class="material-symbols-outlined">
map
</span>
              <li>
                <p>NRK business park,vijay nagar,indore</p>
              </li>

              <span className="material-symbols-outlined">phone_in_talk</span>
              <li>
                <p>+ 01 234 567 89</p>
              </li>

              <span className="material-symbols-outlined">
                forward_to_inbox
              </span>
              <li>
                <p>
                  contact@InfiniteInfotech<br></br>Solution.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
