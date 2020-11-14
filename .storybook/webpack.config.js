module.exports = ({ config }) => {
  /**
   * The processing of SCSS files with postcss and clean-css is not strictly
   * necessary for development, but it is kept to mimic the production
   * environment and avoid surprises.
   */
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'clean-css-loader', 'postcss-loader', 'sass-loader'],
  })

  config.resolve.extensions.push('.scss')

  return config
}
