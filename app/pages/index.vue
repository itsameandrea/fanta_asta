<template>
  <div class="container px-6">
    <!-- <calendar 
      :teams="teams" 
      :shifts="shifts" 
      @selected="onShiftSelected"
      @ctaClick="createShift = true"/>    -->
    <floating-button icon="fas fa-plus" @click="createShift = true"/>
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
  created () {
    this.$store.dispatch('shifts/getAll')
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
    onAdd (shift) {
      const data = {
        shift: {
          date: shift.date,
          employee_id: 8,
          team_id: 22,
          start_time: shift.start,
          end_time: shift.end
        }
      }
      
      this.$store.dispatch('shifts/create', data)
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
