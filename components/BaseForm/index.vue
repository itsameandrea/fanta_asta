<template>
  <div>
    <div class="bg-white px-6 pt-8 pb-3 rounded shadow-md text-black w-full">
      <h1 class="mb-8 text-3xl text-center">{{ title }}</h1>        
      <slot />
      <div class="text-center text-sm text-grey-dark mt-4">
        <slot name="footer" />
      </div>
    </div>
    <div class="text-grey-dark mt-6">
      <slot name="below-form" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'base-form',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>