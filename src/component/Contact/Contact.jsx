import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bqiqgws', 'template_9fdrmsh', form.current, '8aRjVA24FBCQfDg8f')
        .then(() => {
            alert('Sent!');
        }, (error) => {
            console.log(error.text)
            alert(JSON.stringify(err));
        });
  }

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Julian Dominguez</h1>
                  <p>Frontend Developer</p>
                  <p>I am available for work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +54 9 2214358380</p>
                  <p>Email: juliandom@outlook.com.ar</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.facebook.com/Julipdominguez/" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    </a>
                    <a href="https://www.instagram.com/_juliandom/" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    </a>
                    <a href="https://twitter.com/Julian_Dom98" target="_blank">
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref= {form}onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent}required/>
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} required/>
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
