import React from 'react'

import './textarea.stories.scss'

export default {
  title: 'Textarea',
}

export const Horizontal = () => (
  <div className="story__textarea card">
    <label className="field horizontal">
      <span className="label">Description</span>
      <textarea className="textarea" placeholder="The mayor of Lonely Town. Population: one." />
    </label>
  </div>
)

export const Vertical = () => (
  <div className="story__textarea card">
    <label className="field">
      <span className="label">Description</span>
      <textarea className="textarea" placeholder="The mayor of Lonely Town. Population: one." />
    </label>
  </div>
)
