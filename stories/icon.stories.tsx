import { FiMail } from 'react-icons/fi'
import React from 'react'

import './icon.stories.scss'

export default {
  title: 'Icon',
}

const colors = [
  'light',
  'dark',
  'white',
  'black',
  'primary',
  'primary-tint',
  'primary-shade',
  'info',
  'info-tint',
  'info-shade',
  'success',
  'success-tint',
  'success-shade',
  'warning',
  'warning-tint',
  'warning-shade',
  'danger',
  'danger-tint',
  'danger-shade',
]

export const Basic = () => (
  <div className="story__icons card">
    {colors.map((color) => (
      <div className="story__icons__icon">
        <i className={`icon has-icon-${color}`}>
          <FiMail />
        </i>
        <pre>icon has-icon-{color}</pre>
      </div>
    ))}
  </div>
)
