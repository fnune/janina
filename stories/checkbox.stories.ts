import './checkbox.stories.scss'

export default {
  title: 'Checkbox',
}

export const checkbox = () => `
  <div class="story__checkboxes">
    <label class="checkbox">
      <input type="checkbox" />
      <span>Raindrops on roses</span>
    </label>
    <label class="checkbox">
      <input type="checkbox" />
      <span>Whiskers on kittens</span>
    </label>
    <label class="checkbox">
      <input type="checkbox" />
      <span>Bright copper kettles</span>
    </label>
    <label class="checkbox">
      <input type="checkbox" />
      <span>Warm woolen mittens</span>
    </label>
    <label class="checkbox">
      <input type="checkbox" />
      <span>Brown paper packages tied up with strings</span>
    </label>
  </div>
`
