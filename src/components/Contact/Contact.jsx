import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6o653co",
        "template_7ly6dzz",
        form.current,
        "bpH_uqVu8x0joahPT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact-section" className="contact-page">
      <h2>Let's connect</h2>
      <div className="contact-content">
        <div className="contact-methods">
          <div className="contact-method">
            <BsFillTelephoneFill className="contact-icon" />
            <p>Call or Text Me</p>
            <a href="tel:6788318888">678-831-8888</a>
          </div>
          <div className="contact-method">
            <IoMdMail className="contact-icon" />
            <p>Email Me</p>
            <a href="mailto:pkkhanhbui@gmail.com">pkkhanhbui@gmail.com</a>
          </div>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          
          <h5>Send me a message:</h5>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            cols="40"
            rows="6"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
