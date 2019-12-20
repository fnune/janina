module.exports = ({ config }) => {
  /**
   * TypeScript is not related to janina in any way but is included to improve
   * development experience while building stories, and also janina itself.
   */
  config.module.rules.push({
    test: /\.ts$/,
    use: ['ts-loader'],
  })

  /**
   * The processing of SCSS files with postcss and clean-css is not strictly
   * necessary for development, but it is kept to mimic the production
   * environment and avoid surprises.
   */
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'clean-css-loader', 'postcss-loader', 'sass-loader'],
  })

  config.resolve.extensions.push('.ts', '.scss')

  return config
}
