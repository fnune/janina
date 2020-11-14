import React from 'react'

import './tooltip.stories.scss'

export default {
  title: 'Tooltip',
}

export const tooltip = () => (
  <>
    <div className="story__tooltip">
      <div className="tooltip">
        <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
        educated at Braunschweig University of Technology.
      </div>
    </div>
    <div className="story__tooltip">
      <div className="has-tooltip-right">
        <strong>Tooltip on the right</strong>
        <div className="tooltip">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-top">
        <strong>Tooltip above</strong>
        <div className="tooltip">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-bottom">
        <strong>Tooltip below</strong>
        <div className="tooltip">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-left">
        <strong>Tooltip on the left</strong>
        <div className="tooltip">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
    </div>
    <div className="story__tooltip">
      <div className="has-tooltip-right">
        <strong>Sticky tooltip on the right</strong>
        <div className="tooltip sticky">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-top">
        <strong>Sticky tooltip above</strong>
        <div className="tooltip sticky">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-bottom">
        <strong>Sticky tooltip below</strong>
        <div className="tooltip sticky">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
      <div className="has-tooltip-left">
        <strong>Sticky tooltip on the left</strong>
        <div className="tooltip sticky">
          <strong>Friedrich Voss</strong> (7 July 1872 — 3 March 1953) was a German civil engineer
          educated at Braunschweig University of Technology.
        </div>
      </div>
    </div>
  </>
)
