import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import pdf from "../../assets/img/contact/pdf.png";
import email from "../../assets/img/contact/email.png";
import phone from "../../assets/img/contact/phone.png";
import "./contact.css";
import resume from "../../assets/media/khanh-bui-resume.pdf";

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
      <div className="sections-heading">
        <h4>Let's</h4>
        <h2>Connect</h2>
      </div>

      <div className="contact-methods">
        <div class="contact-method resume">
          <img src={pdf} alt="resume" />
          <a href={resume} download>
            Download My Resume
          </a>
        </div>

        <div className="contact-method email">
          <img src={email} alt="email" />
          <a href="mailto:pkkhanhbui@gmail.com">pkkhanhbui@gmail.com</a>
        </div>
        <div className="contact-method phone">
          <img src={phone} alt="phone" />
          <a href="tel:6788318888">678-831-8888</a>
        </div>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Enter Your Name" required />
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

      </form>
    </div>
  );
};

export default Contact;
