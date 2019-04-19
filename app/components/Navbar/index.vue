<template>
  <nav class="bg-red w-screen h-12 shadow-md flex items-center justify-between mb-10">
    <div class="ml-5">
      Toorno
    </div>
    <div class="mr-5 h-full flex justify-between">
      <nav-link to="/" >
        Calendar
      </nav-link>
      <nav-link to="/vacations">
        Vacations
      </nav-link>
    </div>
  </nav>
</template>

<script>
import NavLink from './NavLink'
export default {
  components: {
    NavLink
  }
}
</script>

<style>

</style>
