import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

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
            <div className="slinks">
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
      </section>
    </>
  );
}
