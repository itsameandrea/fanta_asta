<template>
  <div class="container flex p-3">
    <div class="w-2/3">
      <div class="flex flex-wrap">
        <user-card
          v-for="user in allUsers"
          :key="user.email"
          :user="user"
          :logged-in-users="loggedInUsers"
          class="w-1/3"/>
      </div>
    </div>
    <div class="w-1/3">
      <players-table
        v-if="players.length > 0"
        :headers="headers"
        :players="players" />
    </div>
  </div>  
</template>

<script>
import FileUploader from '@/components/FileUploader'
import PlayersTable from '@/components/PlayersTable'
import UserCard from '@/components/UserCard'

export default {
  components: {
    FileUploader,
    PlayersTable,
    UserCard
  },
  data () {
    return {
      headers: ['role', 'name', 'team']
    }
  },
  created () {
    // this.$store.dispatch('players/getPlayers')
    this.$store.dispatch('users/getAllUsers')
    this.$store.dispatch('users/getLoggedInUsers')
  },
  computed: {
    players() {
      return this.$store.getters['players/players']
    },
    allUsers() {
      return this.$store.getters['users/allUsers']
    },
    loggedInUsers() {
      return this.$store.getters['users/loggedInUsers']
    }
  },
  methods: {
    onUpload(file) {
      this.$store.dispatch('players/createPlayersFromSheet', file)
    }
  }
}
</script>

<style>
</style>
