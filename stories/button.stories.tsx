import React from 'react'

import './button.stories.scss'

export default {
  title: 'Button',
}

export const button = () => (
  <div className="story__buttons">
    <button className="button primary">Make a reservation</button>
    <button className="button secondary">Find more hotels</button>
  </div>
)
