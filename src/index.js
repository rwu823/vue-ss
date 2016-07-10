module.exports = {
  template: `
  <svg :width="cSize.width" :height="cSize.height">
    <use xlink:href="#{{typ}}"></use>
  </svg>
`,

  props: {
    size: {
      type: [String, Number],
      default: '20x20'
    },

    typ: {
      type: String,
      required: true,
      default: 'add',
    }
  },

  computed: {
    cSize() {
      const { size } = this
      let width, height

      if (size.includes && size.includes('x')) {
        ;[width, height] = size.split('x')
      } else {
        width = height = size
      }

      return {
        width, height
      }
    },
  },

  data() {
    return {}
  }
}
