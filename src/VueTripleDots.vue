<script>
import TripleDots from 'triple-dots'

export default {
  name: 'VueTripleDots',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    tagId: String,
    ellipsis: {
      type: String,
      default: '...'
    },
    callback: Function,
    truncate: String,
    tolerance: Number,
    keep: {
      type: String,
      default: null,
    },
    watch: String,
    height: Number,
    readLessKey: {
      type: String,
      default: 'readLess',
    },
    readMoreKey: {
      type: String,
      default: 'readMore',
    }
  },
  computed: {
    options() {
      return {
        ellipsis: this.ellipsis,
        callback: this.callback,
        truncate: this.truncate,
        tolerance: this.tolerance,
        keep: this.keep,
        watch: this.watch,
        height: this.height,
      }
    },
    isClamped() {
      return this.tripleDots && this.tripleDots.isClamped
    },
    expanded() {
      return this.tripleDots && this.tripleDots.expanded
    },
  },
  data() {
    return {
      tripleDots: null,
      tagDiv: null,
    }
  },
  methods: {
    toggle() {
      if (!this.tagDiv && !this.tripleDots) return
      if (this.tagDiv.matches('.ddd-truncated')) {
        this.tripleDots.API.restore()
        this.tagDiv.classList.add('full-story')
      } else {
        this.tagDiv.classList.remove('full-story')
        this.tripleDots.API.truncate()
        this.tripleDots.API.watch()
      }
    },
  },
  mounted() {
    const tag = document.querySelector(`#${this.tagId}`)
    if (!tag) return
    this.tripleDots = new TripleDots(tag, this.options)
    this.tagDiv = tag
  },
  render(createElement) {
    const contents = [
      createElement(
        this.tag,
        {
          ref: 'content',
          attrs: {
            id: this.tagId,
            class: 'vue--triple--dots',
          },
        },
        this.$slots.default
      ),
    ]
    const { toggle } = this
    const scope = {
      toggle,
      clamped: this.isClamped,
      expanded: this.expanded,
      text: this.expanded ? this.readMoreKey : this.readLessKey,
    }
    const before = this.$scopedSlots.before
      ? this.$scopedSlots.before(scope)
      : this.$slots.before
    if (before) {
      contents.unshift(...(Array.isArray(before) ? before : [before]))
    }
    const after = this.$scopedSlots.after
      ? this.$scopedSlots.after(scope)
      : this.$slots.after
    if (after) {
      contents.push(...(Array.isArray(after) ? after : [after]))
    }
    return createElement(this.tag, { ref: 'text' }, contents)
  },
}
</script>

<style lang="scss">
.vue--triple--dots ul,
.vue--triple--dots ol,
.vue--triple--dots li {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
}

.vue--triple--dots li {
  height: 35px;
  padding: 7px 0;
}

.vue--triple--dots li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* toggle full story */
.vue--triple--dots > .full-story {
  max-height: initial;
}
</style>
