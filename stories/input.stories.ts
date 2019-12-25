import './input.stories.scss'

export default {
  title: 'Input',
}

export const horizontal = () => `
  <form class="inputs">
    <label class="field horizontal" for="first-name">
      <span>First name</span>
      <input id="first-name" placeholder="Jane" class="input" />
    </label>
    <label class="field horizontal" for="last-name">
      <span>Last name</span>
      <input id="last-name" placeholder="Doe" class="input" />
    </label>
    <label class="field horizontal" for="email">
      <span>Email</span>
      <input id="email" placeholder="jane.doe@example.com" class="input" />
    </label>
    <label class="field horizontal" for="website">
      <span>Company website</span>
      <input id="website" placeholder="example.com" class="input" />
    </label>
  </form>
`

export const vertical = () => `
  <form class="inputs">
    <label class="field" for="first-name">
      <span>First name</span>
      <input id="first-name" placeholder="Jane" class="input" />
    </label>
    <label class="field" for="last-name">
      <span>Last name</span>
      <input id="last-name" placeholder="Doe" class="input" />
    </label>
    <label class="field" for="email">
      <span>Email</span>
      <input id="email" placeholder="jane.doe@example.com" class="input" />
    </label>
    <label class="field" for="website">
      <span>Company website</span>
      <input id="website" placeholder="example.com" class="input" />
    </label>
  </form>
`
