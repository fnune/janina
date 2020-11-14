import { FiMail } from 'react-icons/fi'
import React from 'react'

import './icon.stories.scss'

export default {
  title: 'Icon',
}

export const Basic = () => (
  <div className="story__icons card content">
    <p>
      Icons from{' '}
      <a href="https://feathericons.com/" target="_blank" rel="noopener noreferrer">
        Feather
      </a>
      . You can use your favorite.
    </p>
    <div className="story__icons__icon">
      <i className="icon has-icon-dark">
        <FiMail />
      </i>
      <pre>icon has-icon-dark</pre>
    </div>
    <div className="story__icons__icon">
      <i className="icon has-icon-accent">
        <FiMail />
      </i>
      <pre>icon has-icon-accent</pre>
    </div>
    <div className="story__icons__icon">
      <i className="icon has-icon-success">
        <FiMail />
      </i>
      <pre>icon has-icon-success</pre>
    </div>
    <div className="story__icons__icon">
      <i className="icon has-icon-info">
        <FiMail />
      </i>
      <pre>icon has-icon-info</pre>
    </div>
    <div className="story__icons__icon">
      <i className="icon has-icon-warning">
        <FiMail />
      </i>
      <pre>icon has-icon-warning</pre>
    </div>
    <div className="story__icons__icon">
      <i className="icon has-icon-danger">
        <FiMail />
      </i>
      <pre>icon has-icon-danger</pre>
    </div>
    <div className="story__icons__icon has-background-dark has-text-white">
      <i className="icon has-icon-white">
        <FiMail />
      </i>
      <pre>icon has-icon-white</pre>
    </div>
  </div>
)
