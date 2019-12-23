import { configure } from '@storybook/html'

import '../scss/janina.scss'
import '../stories/theme.scss'

configure(require.context('../stories', true, /\.stories\.ts/), module)
