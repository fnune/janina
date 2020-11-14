import React from 'react'

import './utilities.stories.scss'

export default {
  title: 'Utilities',
}

const Utility = ({ name, example }: { name: string; example: React.ReactNode }) => (
  <div className="story__utilities__utility">
    <pre className="story__utilities__utility__name">{name}</pre>
    <div className="story__utilities__utility__example">{example}</div>
  </div>
)

const colors = [
  'light',
  'dark',
  'white',
  'black',
  'primary-tint',
  'primary',
  'primary-shade',
  'info-tint',
  'info',
  'info-shade',
  'success-tint',
  'success',
  'success-shade',
  'warning-tint',
  'warning',
  'warning-shade',
  'danger-tint',
  'danger',
  'danger-shade',
]

export const ColorUtilities = () => (
  <div className="story__utilities card">
    {colors.map((color) => (
      <Utility
        key={color}
        name={`has-text-${color}`}
        example={
          <span className={`has-text-${color} ${color === 'white' ? 'has-background-dark' : ''}`}>
            Lorem ipsum dolor sit amet
          </span>
        }
      />
    ))}
    {colors.map((color) => (
      <Utility
        key={color}
        name={`has-background-${color}`}
        example={<div className={`has-background-${color}`} />}
      />
    ))}
  </div>
)
