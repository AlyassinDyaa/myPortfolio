import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion"




import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('dyaaalyassin99@gmail.com', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page-container">

      <h1 className="title" style={{fontSize: "3rem"}}>Contact Us</h1>
      <h2 className="sub-title">Get in touch with us</h2>

      <div className="contact-form-container">
        <div className="contact-form-left">
          <h3 className="contact-form-title">Contacting Form</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        <div className="contact-form-right">
          <h3 className="contact-form-title">Contact Me</h3>
          <p><strong>Phone Number:</strong> +1 518 952 5899</p>
          <p><strong>Location:</strong> 12309, Niskayuna ,NY</p>
          <p><strong>Email:</strong> dyaaalyassin@yahoo.com</p>
        </div>
      </div>

      <div class="footer-basic">
    <footer>
        <div class="social">
            <div className="social-media-container">
              <motion.a href="https://www.facebook.com/dyaa.alyassin/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaFacebook className="social-media-icon-FACE" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/d-yaa-a-1b56b9144/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaLinkedin className="social-media-icon-LINK" />
              </motion.a>
              <motion.a href="https://github.com/AlyassinDyaa" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaGithub className="social-media-icon-GIT" />
              </motion.a>
              <motion.a href="https://www.instagram.com/dyaa_alyassin/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaInstagram className="social-media-icon-INSTA" />
              </motion.a>
        </div>
        </div>
        
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#work">Work</a></li>
            <li class="list-inline-item"><a href="#education">Education</a></li>
            <li class="list-inline-item"><a href="#skills">Skills</a></li>
            <li class="list-inline-item"><a href="#hobbies">Hobbies</a></li>
        </ul>
        <p class="copyright">Delicate Solutions 2023 @D'Yaa Alyassin </p>
    </footer>
</div>


    </div>


    


      


  );
};

export default Contact;
