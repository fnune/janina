import React from 'react'

import './card.stories.scss'

export default {
  title: 'Card',
}

export const Default = () => (
  <div className="story__card-container">
    <div className="story__card card content">
      <h3>This is a card</h3>
      <p>
        You can put anything you want in it. It's just a container with a shadow and some padding.
      </p>
      <ul>
        <li>English 6,009,085</li>
        <li>Cebuano 5,378,789</li>
        <li>Swedish 3,744,691</li>
      </ul>
      <div className="story__card-buttons">
        <button className="button primary">Alright, tell me more</button>
        <button className="button secondary">Nevermind</button>
      </div>
    </div>
    <div className="story__card card content">
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
      <div className="story__card-buttons">
        <button className="button primary">Sign me up</button>
      </div>
    </div>
  </div>
)
