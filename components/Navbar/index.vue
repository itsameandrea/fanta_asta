<template>
  <div class="font-sans antialiased" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-blue-dark p-3">
      <div class="block sm:hidden">
        <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto justify-between">
        <div>
          <base-button class="mr-3" append-icon="play">
            Start
          </base-button>
          <base-button color="red" append-icon="pause">
            Pausa
          </base-button>
        </div>
        <div class="flex justify-start">
          <span
            v-for="(active, duration) in durations"
            :key="duration"
            class="mr-2 bg-grey font-bold text-white p-2 rounded cursor-pointer"
            :class="{ 'bg-green': active }"
            @click="onSelectDuration(duration)">
            {{ duration }}s
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton'

export default {
  name: 'navbar',
  components: { BaseButton },
  data() {
    return {
      open: false,
      durations: {
        '10': false,
        '15': false,
        '20': false
      }
    }
  },
  created() {
    const { duration } = this.$store.getters['leagues/selectedLeague']
    this.durations[duration] = true
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    onSelectDuration(duration) {
      Object.keys(this.durations).forEach(key => this.durations[key] = false)
      this.durations[duration] = true

      this.$store.dispatch('leagues/updateLeague', { duration })
    }
  }
}
</script>