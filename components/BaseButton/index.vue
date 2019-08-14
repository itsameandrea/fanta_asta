<template>
  <button :class="buttonClass" v-on="$listeners">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'base-button',
  props: {
    variant: {
      type: String,
      default: 'filled'
    },
    color: {
      type: String,
      default: 'blue'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    backgroundStyle() {
      return this.variant === 'filled'
        ? `bg-${this.color}`
        : 'bg-transparent'
    },
    hoverBackgroundStyle() {
      return this.variant === 'filled'
        ? `hover:bg-${this.color}-dark`
        : `hover:bg-${this.color}`
    },
    textStyle() {
      return this.variant === 'outline'
        ? `text-${this.color}`
        : 'text-white'
    },
    hoverTextStyle() {
      return 'hover:text-white'
    },
    borderStyle() {
      return `border border-${this.color}`
    },
    buttonClass() {
      return {
        [this.backgroundStyle]: true,
        [this.hoverBackgroundStyle]: true,
        [this.textStyle]: true,
        [this.hoverTextStyle]: true,
        [this.borderStyle]: true,
        'rounded': true,
        'py-2': true,
        'px-5': true
      }
    }
  }
}
</script>