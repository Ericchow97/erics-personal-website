import React, { useContext } from "react";
import { Container, Text, Space } from '@mantine/core';
import { SocialButtons } from "../pageComponents/Contact";
import { ReactComponent as LinkedIn } from '../static/Contact/linkedin.svg'
import { ReactComponent as Github } from '../static/Contact/github.svg'
import { ThemeContext, AnchorButton } from "../pageComponents/General";

export const Contact = () => {
  const { handleContactClick } = useContext(ThemeContext)

  return (
    <>
      <Container id="Contact" className='contact-container'>
        <Container className='contact-child-container'>
          <p className="contact-text">Interested in learning more?</p>
          <p className="contact-text description">Connect with me on my socials below!</p>
        </Container>
      </Container>
      <Container className='contact-container second-contact-container'>
        <div className="contact-flex-container">
          <div onClick={handleContactClick}>
            <AnchorButton classNames='white'>
              <p>Contact Me!</p>
            </AnchorButton>
          </div>
          <div>
            <p style={{ fontSize: '16px', margin: 0, marginBottom: '4px' }}>Connect with me!</p>
            <div style={{ display: "flex", gap: '8px', justifyContent: 'center' }}>
              <SocialButtons
                website='https://github.com/Ericchow97'
              >
                <Github />
              </SocialButtons>
              <SocialButtons
                website='https://www.linkedin.com/in/e-chow/'
              >
                <LinkedIn />
              </SocialButtons>
            </div>
          </div>
        </div>
        <p className="footer-text">Created with React.</p>
        <p className="footer-text">See the code base <a href="https://github.com/Ericchow97/erics-personal-website" target={"_blank"} rel="noreferrer noopener" style={{ color: 'inherit' }}>here</a>.</p>
      </Container>
    </>
  )
}