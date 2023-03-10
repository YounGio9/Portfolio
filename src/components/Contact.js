import React from 'react'
import '../styles/Contact.css'
import Write from './Write'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

function Contact() {
    
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send("service_6kvqg4d","template_4zb68kn",{
            name,
            mail,
            subject,
            message
        }, 'LxaEMaX5KQ9fNEpJe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            alert('Votre message a bien été envoyé !')

    }

  return (
    <div id='Contact'>
    <div style={{ marginTop: 65 }}>
        <Write text="Contact" color="white" size={60} />
      </div>
        <form method='POST'  onSubmit={handleSubmit}>
            <div className='name-mail-wrapper'>
            <label htmlFor="name">
            Votre nom
                <input value={name} type="text" id="name" onChange={(e) => setName(e.target.value)} required autoComplete='off'/>
            </label>
            <label htmlFor="email">
            Votre email
                <input value={mail} type="email" id="email" onChange={(e) => setMail(e.target.value)} required autoComplete='off'/>
            </label>

            </div>
            <label htmlFor="subject">
            Sujet
                <input value={subject} type="text" id="subject" onChange={(e) => setSubject(e.target.value)} required autoComplete='off'/>
            </label>
            <label htmlFor="message">
            Votre message
                <textarea value={message} id="message" onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" required autoComplete='off'></textarea>
            </label>

            <input type="submit" value="Envoyer"/>
        </form>
    </div>
  )
}

export default Contact