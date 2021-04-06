import VueTripleDots from './VueTripleDots.vue'

const TripleDots = {
  install(Vue, args = {}) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component(args.componentName || 'vue-triple-dots', VueTripleDots)
  }
}

export default TripleDots
