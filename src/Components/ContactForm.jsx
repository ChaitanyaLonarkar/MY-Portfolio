import React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  // console.log(process.env.REACT_APP_SERVICE_ID);
  // console.log(process.env.REACT_APP_TEMPLATE_ID);
  // console.log(process.env.REACT_APP_PUBLIC_KEY);
  // const a=process.env.REACT_APP_SERVICE_ID

  // console.log(a)
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        // process.env.REACT_APP_TEMPLATE_ID,
        // e.target,
        // process.env.REACT_APP_PUBLIC_KEY,

        "service_l7tk5dz",
        "template_igg4zlw",
        e.target,
        "s8wSJ-uZ9eXF9ofQ6"
      )
      .then(
        (result) => {
          toast.success('Message Send Successfully..!')
        },
        (error) => {
          toast.error('Somthing Wrong ',error.message)
          
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <>
      <div className="form">
        <h2>Want to Connect ?</h2>
        <div className="form">
          <form action="/" method="post" onSubmit={sendEmail}>
            <h3 className="element">Send Message</h3>
            <input
              className="element"
              type="text"
              placeholder="Enter your name"
              required
              name="from_name"
            />
            <input
              className="element"
              type="email"
              placeholder="Enter your email"
              required
              name="from_email"
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
            <button className=" element" type="submit" disabled={isSubmitting}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
