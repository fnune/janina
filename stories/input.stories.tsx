import React from 'react'

import './input.stories.scss'

export default {
  title: 'Input',
}

export const Horizontal = () => (
  <form className="story__inputs">
    <label className="field horizontal" htmlFor="first-name">
      <span className="label">First name</span>
      <input id="first-name" placeholder="Jane" className="input" />
    </label>
    <label className="field horizontal" htmlFor="last-name">
      <span className="label">Last name</span>
      <input id="last-name" placeholder="Doe" className="input" />
    </label>
    <label className="field horizontal" htmlFor="email">
      <span className="label">Email</span>
      <input id="email" placeholder="jane.doe@example.com" className="input" />
    </label>
    <label className="field horizontal" htmlFor="website">
      <span className="label">Company website</span>
      <input id="website" placeholder="example.com" className="input" />
    </label>
  </form>
)

export const Vertical = () => (
  <form className="story__inputs">
    <label className="field" htmlFor="first-name">
      <span className="label">First name</span>
      <input id="first-name" placeholder="Jane" className="input" />
    </label>
    <label className="field" htmlFor="last-name">
      <span className="label">Last name</span>
      <input id="last-name" placeholder="Doe" className="input" />
    </label>
    <label className="field" htmlFor="email">
      <span className="label">Email</span>
      <input id="email" placeholder="jane.doe@example.com" className="input" />
    </label>
    <label className="field" htmlFor="website">
      <span className="label">Company website</span>
      <input id="website" placeholder="example.com" className="input" />
    </label>
  </form>
)
