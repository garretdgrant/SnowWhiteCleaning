import React, { useEffect, useState } from 'react';
import './ContactForm.css';
import { Navigate, useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();



  const messageValid = () => {
    if (!!message == false){
      const error = 'Please enter a message.';
      setErrors([...errors, error]);
    }
    return !!message;
  }

  const nameValid = () => {
    if(!!name == false){
      const error = 'Please enter a name.';
      setErrors([...errors, error]);
    }

    return !!name;
  }

  const numValid = () => {
    let num = '';
    for(let i = 0; i < phoneNumber.length; i++){
      if(!isNaN(phoneNumber[i])){
        num += phoneNumber[i];
      }
    }

    if (num.length != 10){
      const error = "Please enter a valid phone number."
      setErrors([...errors, error])
    }

    return num.length == 10;
  }

  const isValid = () => {
    const errorMessages = [];
    if (!nameValid()){
      errorMessages.push('Please enter a name.')
    }

    if (!numValid()){
      errorMessages.push('Please enter a valid number.')
    }

    if (!messageValid()){
      errorMessages.push('Please enter a valid message.');
    }
    setErrors(errorMessages);
    return errorMessages.length == 0;
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(isValid()){
      navigate('/thanks')
    };
  };

  return (
    <>
    <div class="contact-container">
      <img src="cleaningSupplies.png" className='cleaningSupplies' alt="" />
      <div class="form-greeting">
        <span>
          Fill out the form below or Call (530) 407-1119 for a free estimate today!
        </span>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form" 
          method='post' action='mailto: g.grant92@gmail.com' enctype="multipart/form-data">
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} 
            placeholder='Snow White' autoFocus/>
          </label>
          <label>
            Phone number:
            <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} 
              placeholder='(555) 555-5555'/>
          </label>
          <label>
            Message:
            <textarea value={message} onChange={e => setMessage(e.target.value)} 
              placeholder='Please include address, residential or commercial, and
              approximate square footage. We will respond within 24 hrs.' />
          </label>
          <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
          {errors.length != 0 ? 
            <div className='error-container'>
              <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
            </div>
          :null}
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;