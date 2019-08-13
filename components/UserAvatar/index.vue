<template>
  <img
    :src="src"
    class="rounded-full border-solid border-white border-2"
    :class="{ ' h-10': size === 'sm', 'h-12': size ==='md', 'h-24': size === 'lg' }">		
</template>
<script>
export default {
  name: 'user-avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'sm'
    }
  }
}
</script>