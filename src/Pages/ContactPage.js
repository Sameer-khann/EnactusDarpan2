import React, { useState } from 'react'
// import Navbar from './Navbar';
// import emailjs from 'emailjs-com';
import fb from "../img/fb.png"
import insta from "../img/insta.png"
import tele from "../img/call.png"
import what from "../img/what.png"
// import Footer from './Footer';
// import Footernew from './Footernew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {

   

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {

       

        
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill in all the fields" ,
            {
                position: "top-center"
            });
            return;
        }

        // EmailJS parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // EmailJS service ID, template ID, and user ID
        const serviceID = 'service_7gzbg79';
        const templateID = 'template_aoan2kj';
        const userID = '625XMjcRjLBTEfvG8';

        // Send the email
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
           {
                toast("Send Successfully!"  ,
                {
                    position: "top-center"
                })
                  
            };

        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    // Update state variables as the user types
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

   

    return (
        <>
            <div className="contactPage">
                <div className="backg">
                    <h4>Contact Us</h4>
                </div>
                <h4 className='getText'>DARPAN</h4>
                <div className="formbox">
                    <div className="imgconfrom">
                        <div className="cardd">
                            <div className='textCARD'>GET IN TOUCH</div>
                            <span className='textsaboutform'>We would love to hear from you! If you have any questions, inquiries, or would like to discuss a design project, please don't hesitate to get in touch with us. Our team Darpan is dedicated to providing exceptional product service and personalized solutions to meet your unique needs.</span>

                            <span className='textsaboutform'>We look forward to hearing from you and starting a creative journey together. Let's bring your design ideas to life!"</span>
                        </div>
                    </div>
                    <div className='textsec'>
                        <form className='form' onSubmit={handleSubmit}>
                            <h1 style={{ textAlign: "center" }}>Contact Us</h1>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea className='message'
                                id="message"
                                value={message}
                                onChange={handleMessageChange}
                            ></textarea>
                            <div className='buttonCOntact' type="submit">Send</div>
                    
                            {/* <ToastContainer /> */}
                            
                        </form>
                    </div>
                </div>


                {/* <h4 className='getText'>social media</h4> */}

                {/* <div className="social">
                    <div className="cd">
                        <img src={fb} alt="" />
                        <h3 className='cdtext'>Facebook</h3>
                    </div>
                    <div className="cd">
                        <img src={what} alt="" />
                        <h3 className='cdtext'>Whatsapp</h3>
                    </div>
                    <div className="cd">
                        <img src={tele} alt="" />
                        <h3 className='cdtext'>Phone</h3>
                    </div>
                    <div className="cd">
                        <img src={insta} alt="" />
                        <h3 className='cdtext'>Instagram</h3>
                    </div>
                </div> */}
            </div>
            {/* <Footernew /> */}
        </>
    )
}