<template>
  <div class="container px-6">
    <calendar 
      :teams="teams" 
      :shifts="shifts" 
      @selected="onShiftSelected"
      @ctaClick="createShift = true"/>   
    <!-- <floating-button icon="fas fa-plus" @click="createShift = true"/> -->
    <shift-modal 
      :showModal="createShift" 
      :preloadShift="selectedShift"
      @close="createShift = false" 
      @submit="onAdd" />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar'
import FloatingButton from '@/components/FloatingButton'
import ShiftModal from '@/components/ShiftModal'

export default {
  components: {
    Calendar,
    FloatingButton,
    ShiftModal
  },
  data () {
    return {
      createShift: false,
      selectedShift: null
    }
  },
  computed: {
    shifts () {
      return this.$store.getters['shifts/shifts']
    },
    teams () {
      return this.$store.getters['teams/teams']
    }
  },
  methods: {
    async onAdd (shift) {
      await this.$store.dispatch('shifts/create', shift)
      this.createShift = false
    },
    onShiftSelected (shift) {
      this.selectedShift = shift
      this.createShift = true
    }
  }
}
</script>

<style>
</style>
