import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = ({ id = "contact" }) => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Send your email
    emailjs.sendForm(
      "service_ilsvh6l",      // replace with your EmailJS service ID
      "template_qpibjwq",     // replace with your EmailJS template ID for your inbox
      form.current,
      "akQqS6xev5gG8CR8c"       // replace with your EmailJS public key
    )
    .then(() => {
      // Optional: Send auto-reply
      emailjs.send(
        "service_ilsvh6l",      // same service ID
        "template_gwqckrl",    // EmailJS template ID for auto-reply
        {
          name: e.target.user_name.value,
          email: e.target.user_email.value,
          title: e.target.message.value
        },
        "akQqS6xev5gG8CR8c"
      );

      setStatus("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => setStatus("Failed to send message."));
  };

  return (
    <section id={id} className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        I’d love to hear from you! Feel free to reach out for opportunities, collaborations, or just a friendly hello.
      </p>

      <div className="contact-card">
        {/* Contact Info */}
        <div className="contact-info">
          <p className="email-line">
            <Mail size={18} /> <a href="mailto:kalpana1kushwaha@gmail.com">kalpana1kushwaha@gmail.com</a>
          </p>         

          <div className="social-icons">
            <a href="https://github.com/kalpana-kushwaha" target="_blank" rel="noopener noreferrer">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/kalpana-kushwaha-a889a322a/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
