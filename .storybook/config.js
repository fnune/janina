import { configure } from '@storybook/html'

import '../scss/janina.scss'

configure(require.context('../stories', true, /\.stories\.ts/), module)
