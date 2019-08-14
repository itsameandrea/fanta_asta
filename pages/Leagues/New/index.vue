<template>
  <div class="flex justify-center h-full mt-20">
    <div class="w-2/3">
      <league-form @onSubmit="onCreateLeague"/>
    </div>
  </div>
</template>
<script>
import LeagueForm from '@/components/LeagueForm'

export default {
  name: 'create-league',
  layout: 'sidebar',
  components: { LeagueForm },
  methods: {
    onCreateLeague(leagueDetails) {
      this.$store.dispatch('leagues/createLeague', leagueDetails)
    }
  }
}
</script>