<template>
  <button 
    class="font-bold rounded border-b-2 shadow-md py-2 px-6 inline-flex items-center"
    :class="buttonClass">
    <span class="mr-2">
      <slot></slot>
    </span>
    <font-awesome-icon v-if="appendIcon" :icon="appendIcon" />
  </button>
</template>
<script>
export default {
  name: 'base-button',
  props: {
    filled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'green'
    },
    textColor: {
      type: String,
      default: 'grey'
    },
    appendIcon: {
      type: String,
      default: null
    }
  },
  computed: {
    backgroundStyle() {
      return this.filled
        ? `bg-${this.color}`
        : 'bg-white'
    },
    borderStyle() {
      return this.filled
        ? ''
        : `border-${this.color} hover:border-${this.color}-dark`
    },
    hoverBackgroundStyle() {
      return this.filled
        ? `hover:bg-${this.color}-dark`
        : `hover:bg-${this.color}`
    },
    textStyle() {
      return this.filled
        ? 'text-white'
        : 'text-gray-darker hover:text-white'
    },
    buttonClass() {
      return {
        [this.backgroundStyle]: true,
        [this.hoverBackgroundStyle]: true,
        [this.borderStyle]: true,
        [this.textStyle]: true
      }
    }
  }
}
</script>