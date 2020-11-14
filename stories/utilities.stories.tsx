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

const colors = ['dark', 'light', 'white', 'accent', 'link', 'success', 'info', 'warning', 'danger']
const backgroundColors = [
  'white',
  'dark',
  'dark-tint',
  'dark-shade',
  'light',
  'light-tint',
  'light-shade',
  'red',
  'red-tint',
  'red-shade',
  'blue',
  'blue-tint',
  'blue-shade',
  'green',
  'green-tint',
  'green-shade',
]

export const ColorUtilities = () => (
  <div className="story__utilities card content">
    {colors.map((color) => (
      <Utility
        name={`has-text-${color}`}
        example={
          <span className={`has-text-${color} ${color === 'white' ? 'has-background-dark' : ''}`}>
            Lorem ipsum dolor sit amet
          </span>
        }
      />
    ))}
    {backgroundColors.map((color) => (
      <Utility
        name={`has-background-${color}`}
        example={<div className={`has-background-${color}`} />}
      />
    ))}
  </div>
)
