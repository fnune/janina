import React from 'react'

import './form.stories.scss'

export default {
  title: 'Form',
}

const FormExample = (props: { fieldExtras?: string }) => (
  <form className="story__form form">
    <label className={`field ${props.fieldExtras}`} htmlFor="first-name">
      <span className="label">First name</span>
      <input id="first-name" placeholder="Jane" className="input" />
    </label>
    <label className={`field ${props.fieldExtras}`} htmlFor="last-name">
      <span className="label">Last name</span>
      <input id="last-name" placeholder="Doe" className="input" />
    </label>
    <div className={`field ${props.fieldExtras}`}>
      <span className="label">Choices</span>
      <div className="group">
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
      </div>
    </div>
    <label className={`field ${props.fieldExtras}`}>
      <span className="label">Description</span>
      <textarea className="textarea" placeholder="The mayor of Lonely Town. Population: one." />
    </label>
    <div className={`field ${props.fieldExtras}`}>
      <span className="label">Options</span>
      <div className="group">
        <label className="checkbox">
          <input type="checkbox" />
          <span>Raindrops on roses</span>
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          <span>Whiskers on kittens</span>
        </label>
      </div>
    </div>
    <label className={`field ${props.fieldExtras}`}>
      <span className="label">Country</span>
      <select className="select">
        <option value="de">Germany</option>
        <option value="uy">Uruguay</option>
        <option value="es">Spain</option>
      </select>
    </label>
  </form>
)

export const Horizontal = () => <FormExample fieldExtras="horizontal" />
export const Vertical = () => <FormExample />
