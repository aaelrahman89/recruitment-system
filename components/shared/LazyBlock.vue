<template>
  <div :ref="target" class="lazy-block">
    <div v-if="show" class="lazy-wrapper">
      <slot></slot>
    </div>
    <SpinnerLoading v-else />
  </div>
</template>

<script>
import SpinnerLoading from '@/components/shared/SpinnerLoading';
export default {
  name: 'LazyBlock',
  components: {
    SpinnerLoading
  },
  props: { target: { type: String, required: true } },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
      this.onScroll()
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const lazyBlock = this.$refs[this.target]
      if (lazyBlock) {
        const marginTopBlock = lazyBlock.getBoundingClientRect().top
        const innerHeight = window.innerHeight

        if (marginTopBlock - innerHeight < 150) {
          this.show = true
          window.removeEventListener('scroll', this.onScroll)
        }
      }
    },
  },
}
</script>
