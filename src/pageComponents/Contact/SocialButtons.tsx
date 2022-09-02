import React from "react";
import PropTypes from 'prop-types';
import { ThemeIcon, Anchor } from '@mantine/core'

interface IProps {
  website: string
  children: React.ReactNode
}

export const SocialButtons = (props: IProps) => {
  return (
    <>
      <ThemeIcon variant="outline" radius="xl" size="xl" className="contact-icon-container">
          <Anchor href={props.website} target="_blank" className="contact-icon">
            {props.children}
          </Anchor>
      </ThemeIcon>
    </>
  )
}

SocialButtons.propTypes = {

  website: PropTypes.string.isRequired,
}

