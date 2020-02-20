import './card.stories.scss'

export default {
  title: 'Card',
}

export const Default = () => `
  <div class="story__card-container">
    <div class="story__card card content">
      <h3>This is a card</h3>
      <p>You can put anything you want in it. It's just a container with a shadow and some padding.</p>
      <ul>
        <li>English 6,009,085</li>
        <li>Cebuano 5,378,789</li>
        <li>Swedish 3,744,691</li>
      </ul>
      <div class="story__card-buttons">
        <button class="button primary">Alright, tell me more</button>
        <button class="button secondary">Nevermind</button>
      </div>
    </div>
    <div class="story__card card content">
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
      <div class="story__card-buttons">
        <button class="button primary">Sign me up</button>
      </div>
    </div>
  </div>
`
