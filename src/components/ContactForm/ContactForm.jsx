import { useState } from "react";

import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState('Nikhil');
  const [email, setEmail] = useState('pawarnikhild@gmail.com');
  const [Message, setMessage] = useState('Do some coding');

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px"/>}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="message" rows={8} />
          </div>
          <div className={styles.submit_btn}>
            <Button text="SUBMIT" />
          </div>
          <div>
            {name + ' ' + email + ' ' + Message}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
