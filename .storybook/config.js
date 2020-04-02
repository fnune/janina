import { configure } from '@storybook/react'

import '../scss/janina.scss'
import '../stories/theme.scss'

configure(require.context('../stories', true, /\.stories\.ts/), module)
