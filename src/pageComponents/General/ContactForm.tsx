import React, { useEffect, useState } from "react"

interface IProps {
  show: boolean,
  handleContactClick: (e: React.MouseEvent) => void
}

interface FormObject {
  [key: string]: FormDataEntryValue
}

export const ContactForm = ({ show, handleContactClick }: IProps) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)
  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

  //TODO: success and fail messages
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('here')
    const form = document.querySelector('.contact-form') as HTMLFormElement
    const formData = new FormData(form);
    const obj: FormObject = {};
    formData.forEach((value, key) => {
      obj[key] = value
    });
    const json = JSON.stringify(obj);

    try {
      const res = await (await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })).json()

      if (res.success) {
        // handle success
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
      } else {
        //handle fail
      }

    } catch {
      console.log('error')
    }
  }

  return (
    <>
      {show &&
        <>
          <div className="contact-form-background contact-form-close" onClick={(e) => handleContactClick(e)}>
            <div className="contact-form-container">
              <div className='contact-form-header-container'>
                <div className='contact-form-header'>
                  <h3 className="contact-form-header-text">Contact Form</h3>
                  <div className="contact-form-close-button" >
                    <svg xmlns="http://www.w3.org/2000/svg" className='contact-form-close' width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" className='contact-form-close'></path>
                      <line x1="18" y1="6" x2="6" y2="18" className='contact-form-close'></line>
                      <line x1="6" y1="6" x2="18" y2="18" className='contact-form-close'></line>
                    </svg>
                  </div>
                </div>
                <p className="contact-form-header-description">Have questions or comments? Feel free to send me a message!</p>
              </div>
              <form className='contact-form' onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="4d4e7d4f-deb8-4892-a8de-6a4fad3080a7" />
                <div className="contact-form-flex-container">
                  <div>
                    <label htmlFor="fname" className="contact-form-text">First Name</label>
                    <input
                      name="fname"
                      placeholder="First Name"
                      required
                      className="contact-form-input"
                      value={firstName}
                      onChange={onFirstNameChange}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="lname" className="contact-form-text">Last Name</label>
                    <input
                      name="lname"
                      placeholder="Last Name"
                      required
                      className="contact-form-input"
                      value={lastName}
                      onChange={onLastNameChange}
                    ></input>
                  </div>
                </div>
                <label htmlFor='email' className="contact-form-text">Email</label>
                <input
                  type='email'
                  name="email"
                  placeholder="email@email.com"
                  required
                  className="contact-form-input"
                  value={email}
                  onChange={onEmailChange}
                ></input>
                <label htmlFor="message" className="contact-form-text">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  required
                  rows={5}
                  className="contact-form-input"
                  value={message}
                  onChange={onMessageChange}
                ></textarea>
                <button className="anchor-button white contact-form-submit" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </>
      }
    </>
  )
}