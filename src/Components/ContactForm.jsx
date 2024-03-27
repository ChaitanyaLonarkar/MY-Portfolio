import React from "react";
import { useState, useEffect } from "react";
// import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <>
      <div className="form">
        <h2>Want to Connect ?</h2>
        {/* <form >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form> */}
        <div className="form">
          <form action="/" method="post" onSubmit={sendEmail} >
            <h3 className="element">Send Message</h3>
            <input
              className="element"
              type="text"
              placeholder="Enter your name"
              required
              name="user_name"
            />
            <input
              className="element"
              type="email"
              placeholder="Enter your email"
              required
              name="user_email"
            />
            {/* <input
              className="element"
              type="text"
              placeholder="Enter your mobile"
              required

            /> */}
            <textarea
              className="element"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Write your message here"
              required
              
            ></textarea>
            <button className=" element" type="submit"  disabled={isSubmitting}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
