import React from 'react'

import './input.stories.scss'

export default {
  title: 'Input',
}

export const horizontal = () => (
  <form className="story__inputs">
    <label className="field horizontal" htmlFor="first-name">
      <span>First name</span>
      <input id="first-name" placeholder="Jane" className="input" />
    </label>
    <label className="field horizontal" htmlFor="last-name">
      <span>Last name</span>
      <input id="last-name" placeholder="Doe" className="input" />
    </label>
    <label className="field horizontal" htmlFor="email">
      <span>Email</span>
      <input id="email" placeholder="jane.doe@example.com" className="input" />
    </label>
    <label className="field horizontal" htmlFor="website">
      <span>Company website</span>
      <input id="website" placeholder="example.com" className="input" />
    </label>
  </form>
)

export const vertical = () => (
  <form className="story__inputs">
    <label className="field" htmlFor="first-name">
      <span>First name</span>
      <input id="first-name" placeholder="Jane" className="input" />
    </label>
    <label className="field" htmlFor="last-name">
      <span>Last name</span>
      <input id="last-name" placeholder="Doe" className="input" />
    </label>
    <label className="field" htmlFor="email">
      <span>Email</span>
      <input id="email" placeholder="jane.doe@example.com" className="input" />
    </label>
    <label className="field" htmlFor="website">
      <span>Company website</span>
      <input id="website" placeholder="example.com" className="input" />
    </label>
  </form>
)
