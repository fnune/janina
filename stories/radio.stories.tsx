import React from 'react'

import './radio.stories.scss'

export default {
  title: 'Radio',
}

export const radio = () =>
  <div className="story__radios">
    <label className="radio">
      <input name="favorite-thing" value="raindrops" type="radio" />
      <span>Raindrops on roses</span>
    </label>
    <label className="radio">
      <input name="favorite-thing" value="whiskers" type="radio" />
      <span>Whiskers on kittens</span>
    </label>
    <label className="radio">
      <input name="favorite-thing" value="kettles" type="radio" />
      <span>Bright copper kettles</span>
    </label>
    <label className="radio">
      <input name="favorite-thing" value="mittens" type="radio" />
      <span>Warm woolen mittens</span>
    </label>
    <label className="radio">
      <input name="favorite-thing" value="packages" type="radio" />
      <span>Brown paper packages tied up with strings</span>
    </label>
  </div>

