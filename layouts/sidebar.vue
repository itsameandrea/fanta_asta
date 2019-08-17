<template>
  <div class="bg-grey-lightest h-screen flex">
    <side-drawer :items="navItems" />
    <div class="w-5/6" :class="{ 'p-5': !isAdmin }">
      <navbar v-if="isAdmin" />
      <main :class="{ 'p-5': isAdmin }">
        <nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import SideDrawer from'@/components/SideDrawer'
import Navbar from '@/components/Navbar'

export default {
  name: 'dashboard-layout',
  components: { SideDrawer, Navbar },
  data() {
    return {
      navItems: [
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Asta', url: '/auction' },
        { label: 'Lega', url: '/leagues' }
      ]
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['users/currentUser']
    },
    selectedLeague() {
      return this.$store.getters['leagues/selectedLeague']
    },
    isAdmin() {
      return this.selectedLeague 
        ? this.selectedLeague.admin.uid === this.currentUser.uid
        : false
    }
  },
  mounted() {
  }
}
</script>
<style scoped>

</style>