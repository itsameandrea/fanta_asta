<template>
  <league-info v-if="selectedLeague" :league="selectedLeague" />
  <league-missing v-else @ctaClick="$router.push('leagues/new')"/>
</template>
<script>
import LeagueMissing from '@/components/LeagueMissing'

export default {
  name: 'league-page',
  layout: 'sidebar',
  components: { LeagueMissing },
  computed: {
    selectedLeague() {
      return this.$store.getters['leagues/selectedLeague']
    }
  }
}
</script>