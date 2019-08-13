<template>
  <div class="bg-grey-lightest h-screen flex">
    <side-drawer :items="navItems" />
    <div class="w-5/6 p-5">
      <nuxt />
    </div>
  </div>
</template>
<script>
import SideDrawer from'@/components/SideDrawer'

export default {
  name: 'dashboard-layout',
  components: { SideDrawer },
  data() {
    return {
      navItems: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Asta', url: '/auction' },
        { label: 'Crea Lega', url: '/leagues/new' }
      ]
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['users/currentUser']
    }
  },
  mounted() {
  }
}
</script>
<style scoped>

</style>