import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <section className="contact" id="Contact">
        <div className="cl">
          <h2>
            Let's <br /> Connect
          </h2>
          <p>Chaitanyalonarkar@gmail.com</p>
          <div className="icons">
            <div className="slinks clinks">
              <a href="http://" target="_blank">
                <FaLinkedin />
              </a>
              <a href="http://" target="_blank">
                <FaSquareGithub />
              </a>
              <a href="http://" target="_blank">
                <FaSquareXTwitter />
              </a>
              {/* <a href="http://" target="_blank"></a> */}
            </div>
          </div>
        </div>
        <div className="cr">
          <div className="contact-form">
           <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
}
