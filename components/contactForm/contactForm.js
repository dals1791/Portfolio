import React, { useState } from "react";
import axios from "axios";
import styles from "./contactForm.module.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [formSubmitMsg, setFormSubmitMsg]=useState("")
  const form_id=process.env.NEXT_PUBLIC_FORMID
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `https://formspree.io/f/${form_id}`,
      data: formData,
    })
    .then(r=>{
        setFormSubmitMsg("Thanks, I will respond as soon as I can!") 
    })
    .catch(e=>{
        setFormSubmitMsg("Your message did not submit!")
    })

  };
  const handleChange=(event)=>{
    setFormData({...formData, [event.target.name]: event.target.value});
  };
  return (<>
  <div className={styles.formContainer}>
      <p>Lets make the next great thing! Send me your ideas</p>
    <form onSubmit={handleSubmit} 
    className={styles.contactForm}>
        <label>Your Email</label>
        <input
        className={styles.emailInput}
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        />
        <label>Message</label>
        <textarea
        className={styles.messageInput}
        type="text"
        name="message"
        placeholder="Send me a Message"
        value={formData.message}
        onChange={handleChange}
        />
        <button className={styles.submitButton} type="submit">Send</button>

    </form>
    <p>{formSubmitMsg}</p>
    </div>
  </>);
};

export default ContactForm;
