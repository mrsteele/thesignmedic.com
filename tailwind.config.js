module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './src/**/*.js'
    ]
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: []
}
