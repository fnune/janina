import React from 'react'

import './base.stories.scss'

export default {
  title: 'Base',
}

export const colors = () => (
  <>
    <div className="story__hues">
      <div className="story__hue has-background-dark"></div>
      <div className="story__hue has-background-dark-tint"></div>
      <div className="story__hue has-background-dark-shade"></div>
      <div className="story__hue has-background-light"></div>
      <div className="story__hue has-background-light-tint"></div>
      <div className="story__hue has-background-light-shade"></div>
    </div>
    <div className="story__hues">
      <div className="story__hue has-background-orange"></div>
      <div className="story__hue has-background-orange-tint"></div>
      <div className="story__hue has-background-orange-shade"></div>
      <div className="story__hue has-background-red"></div>
      <div className="story__hue has-background-red-tint"></div>
      <div className="story__hue has-background-red-shade"></div>
    </div>
    <div className="story__hues">
      <div className="story__hue has-background-blue"></div>
      <div className="story__hue has-background-blue-tint"></div>
      <div className="story__hue has-background-blue-shade"></div>
      <div className="story__hue has-background-green"></div>
      <div className="story__hue has-background-green-tint"></div>
      <div className="story__hue has-background-green-shade"></div>
    </div>
  </>
)
