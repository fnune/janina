# janina

A component library and design system with a vision of cross-platform compatibility.

Typography and spacing set-up based on [ether](https://github.com/wearethescenery/ether).

The typeface of choice is [Inter](https://github.com/rsms/inter).

## Development

| Command                 | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `yarn start`            | Builds with `build:scss` and watches for changes                                                                          |
| `yarn build`            | Runs all build commands in succession in preparation for a release                                                        |
| `yarn lint`             | Run [stylelint](https://github.com/stylelint/stylelint)                                                                   |
| `yarn format`           | Run [Prettier](https://github.com/prettier/prettier)                                                                      |
| `yarn build:autoprefix` | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) writing on top of `css/janina.css`                           |
| `yarn build:cleancss`   | Minifies `css/janina.css` using [clean-css](https://github.com/jakubpawlowicz/clean-css) and outputs `css/janina.min.css` |
| `yarn build:clean`      | Removes the `css` directory                                                                                               |
| `yarn build:scss`       | Builds `css/janina.css` and `css/janina.css.map`                                                                          |
