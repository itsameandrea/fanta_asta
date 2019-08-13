<template>
  <div class="bg-grey-lightest h-screen">
    <nuxt />
  </div>
</template>
<script>

export default {

}
</script>

<style>
  .nuxt-link-exact-active::after {
    height: 3px;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
  }
</style>
