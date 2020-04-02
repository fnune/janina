import React from 'react'

import './checkbox.stories.scss'

export default {
  title: 'Checkbox',
}

export const checkbox = () => (
  <div className="story__checkboxes">
    <label className="checkbox">
      <input type="checkbox" />
      <span>Raindrops on roses</span>
    </label>
    <label className="checkbox">
      <input type="checkbox" />
      <span>Whiskers on kittens</span>
    </label>
    <label className="checkbox">
      <input type="checkbox" />
      <span>Bright copper kettles</span>
    </label>
    <label className="checkbox">
      <input type="checkbox" />
      <span>Warm woolen mittens</span>
    </label>
    <label className="checkbox">
      <input type="checkbox" />
      <span>Brown paper packages tied up with strings</span>
    </label>
  </div>
)
