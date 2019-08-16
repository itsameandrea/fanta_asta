<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-1/2"> 
      <join-league-form :league-prop="league" @onSubmit="onJoin"/>
    </div>
  </div>
</template>
<script>
import JoinLeagueForm from '@/components/JoinLeagueForm'

export default {
  name: 'join-league-page',
  components: { JoinLeagueForm },
  async asyncData ({ params, app }) {
    const { docs } = await app.$fireStore
      .collection('leagues')
      .where('slug', '==', params.slug)
      .get()
        
    const league = docs[0].data()

    return {
      league
    }
  },
  methods: {
    async onJoin({ user, league }) {
      if (this.league.passcode === league.passcode && this.league.users.includes(user.email)) {
        const uid = await this.$store.dispatch('auth/register', user)
        
        user.uid = uid

        await this.$store.dispatch('users/addLeagueToUsers', {
          users: [user],
          league: this.league.name
        })

        await this.$store.dispatch('leagues/addUserToLeague', { user, league: this.league })

        this.$router.replace('/')
      } else {
        alert('Something went wrong')
        // Add some error message
      }
    }
  }
}
</script>