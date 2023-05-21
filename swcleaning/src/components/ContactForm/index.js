import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, phoneNumber, message });
  };

  return (
    <>
    <img src="cleaningSupplies.png" className='cleaningSupplies' alt="" />
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Phone number:
          <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default ContactForm;