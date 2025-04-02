import React, { useState } from "react";
// import "./styles.css"; // Ensure your styles are imported

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d51b7958-a561-4f6c-a9b7-51ad9ce6b3af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="contact-submit" type="submit">
          Submit Form
        </button>
      </form>
      <span className="contact-result">{result}</span>
    </div>
  );
}

export default ContactForm;
