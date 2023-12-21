import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import emailjs from "emailjs-com";

const phoneNumber = "+8801704672028";
const recipientEmail = "hasan.mahadi2903@gmail.com";

const handlePhoneClick = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const handleEmailClick = () => {
  window.location.href = `mailto:${recipientEmail}`;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.message.trim() === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const templateParams = {
        to_name: "MD. Mahadi Hasan",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_cfe00fa",
        "template_qxhl88n",
        templateParams,
        "MPvd_0oOytctq-DYD"
      );

      toast.success("Message sent successfully");

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="container grid contact_container">
        <div className="contact_data">
          <h3 className="contact_title">Don&apos;t be Shy!</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen
                className="info_icon"
                onClick={handleEmailClick}
                style={{ cursor: "pointer" }}
              />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">{recipientEmail}</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt
                className="info_icon"
                onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}
              />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">{phoneNumber}</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <a
              href="https://www.facebook.com/profile.php?id=100064028100652&mibextid=ZbWKwL"
              className="contact_social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/mahadi_hasan2903?igshid=NGExMmI2YTkyZg=="
              className="contact_social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mahadi-hasan-425660258"
              className="contact_social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MahadiHasan2903"
              className="contact_social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form_control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form_input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form_control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form_input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form_control"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form_input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form_control"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button_icon contact_button_icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
