import React from 'react'

import './select.stories.scss'

export default {
  title: 'Select',
}

export const Horizontal = () => (
  <div className="story__select card">
    <label className="field horizontal">
      <span className="label">Country</span>
      <select className="select">
        <option value="de">Germany</option>
        <option value="uy">Uruguay</option>
        <option value="es">Spain</option>
      </select>
    </label>
  </div>
)

export const Vertical = () => (
  <div className="story__select card">
    <label className="field">
      <span className="label">Country</span>
      <select className="select">
        <option value="de">Germany</option>
        <option value="uy">Uruguay</option>
        <option value="es">Spain</option>
      </select>
    </label>
  </div>
)
