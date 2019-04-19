<template>
  <span
    @click="$emit('click')"
    class="bg-red-light shadow-md text-white rounded-full w-12 h-12 absolute pin-r pin-b m-5 flex justify-center items-center cursor-pointer hover:shadow-lg">
    <i :class="icon"></i> 
  </span>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>

<style>

</style>
