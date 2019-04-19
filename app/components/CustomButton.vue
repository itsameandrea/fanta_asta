<template>
  <div :class="`flex ${color} rounded items-center overflow-hidden shadow-md hover:shadow-lg`" @click.prevent="$emit('click')">
    <button class="block text-white text-sm text-sm py-2 px-3 font-sans tracking-wide uppercase font-bold">
      <slot></slot>
    </button>
    <div v-if="icon" class="p-3">
      <div class="w-4 h-4 text-white">
        <i :class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>
