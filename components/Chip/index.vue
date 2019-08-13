<template>
  <span
    :class="`${bgColor} hover:${hoverBgColor} ${textColor} ${chipStyle} font-bold py-2 px-4`"
    @click="$emit('onClick')">
    <slot />
  </span>
</template>
<script>
export default {
  name: 'chip',
  props: {
    bgColor: {
      type: String,
      default: 'bg-grey'
    },
    hoverBgColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: 'black'
    },
    isPill: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    chipStyle() {
      return this.isPill ? 'rounded-full' : 'rounded'
    }
  }
}
</script>