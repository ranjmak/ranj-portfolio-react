import { useState } from 'react';
import { send } from 'emailjs-com';
import './style.css';

function Contact({personalDetails}) {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
    to_name: 'ranj',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_38o2xz6',
      'template_kmosb0h',
      toSend,
      'Et6vzplp0bFcSp8tp'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="Contact container">
      <div>
        <h3 className="pageTitle">Contact</h3>
        <p className="pageDescription">Reach out</p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 contact_details">
          <div>
            <p>If you would like to discuss future projects or have a project in mind and need technical support, 
              I am open to ideas for collaboration</p>
          </div>
          <div>
              <p>My availability is {personalDetails.location}</p>
          </div>
          <div>
              <p>You can reach out by emailing me at <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
                , alternatevily, leave your name, 
              email and a message and i'll get back to you</p>
          </div>
          <div className='signature'>{personalDetails.signature}</div>
        </div>
        <div className="col-12 col-lg-6">
          <form className="form" onSubmit={onSubmit}>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              value={toSend.user_name}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='user_email'
              placeholder='Your Email Address'
              value={toSend.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              type='text'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <div className='to_name'>
                {toSend.to_name}
            </div>
            <button className='btn' type='submit'>Get Back to me!</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Contact;