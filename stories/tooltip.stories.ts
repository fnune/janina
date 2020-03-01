import './tooltip.stories.scss'

export default {
  title: 'Tooltip',
}

export const tooltip = () => `
  <div class="story__tooltip">
    <div class="tooltip content compact">
      <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
      German civil engineer educated at Braunschweig University of Technology.
    </div>
  </div>
  <div class="story__tooltip">
    <div class="has-tooltip-right">
      <strong>Tooltip on the right</strong>
      <div class="tooltip content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-top">
      <strong>Tooltip above</strong>
      <div class="tooltip content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-bottom">
      <strong>Tooltip below</strong>
      <div class="tooltip content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-left">
      <strong>Tooltip on the left</strong>
      <div class="tooltip content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
  </div>
  <div class="story__tooltip">
    <div class="has-tooltip-right">
      <strong>Sticky tooltip on the right</strong>
      <div class="tooltip sticky content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-top">
      <strong>Sticky tooltip above</strong>
      <div class="tooltip sticky content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-bottom">
      <strong>Sticky tooltip below</strong>
      <div class="tooltip sticky content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
    <div class="has-tooltip-left">
      <strong>Sticky tooltip on the left</strong>
      <div class="tooltip sticky content compact">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a
        German civil engineer educated at Braunschweig University of Technology.
      </div>
    </div>
  </div>
`
