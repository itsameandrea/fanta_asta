<template>
  <transition name="fade">
    <div v-show="value" class="fixed pin z-50 overflow-auto flex bg-smoke-light shadow-lg justify-center">
      <div class="relative w-3/4 md:w-1/2 max-w-md rounded p-8 bg-white m-auto mt-12 flex-col">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
