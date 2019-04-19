<template>
  <modal :value="showModal">
    <form class="flex flex-wrap">
      <div class="w-full md:w-1/2 mb-4 md:px-2">
        <label class="block text-grey-darker text-sm font-bold mb-2">
          Shift Date
        </label>
        <flat-pickr :config="pickerConfig" class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" v-model="shift.date" placeholder="Pick a date"></flat-pickr>
      </div>
      <div class="w-full md:w-1/2 mb-4 md:px-2">
        <label class="block text-grey-darker text-sm font-bold mb-2">
          Employee
        </label>
        <div class="relative">
          <select v-model="shift.employee" :class="`shadow appearance-none border bg-white rounded py-2 px-3 w-full ${selectClass} leading-tight focus:outline-none focus:shadow-outline`">
            <option :value="false " disabled selected>Select employee</option>
            <option v-for="(employee, index) in employees" :key="index" :value="employee.id"> {{ employee.name }}</option>
          </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 mb-4 md:px-2">
        <label class="block text-grey-darker text-sm font-bold mb-2">
          Team
        </label>
        <div class="relative">
          <select v-model="shift.team" :class="`shadow appearance-none border bg-white rounded py-2 px-3 w-full ${selectClass} leading-tight focus:outline-none focus:shadow-outline`">
            <option :value="false " disabled selected>Select team</option>
            <option v-for="(team, index) in teams" :key="index" :value="team.name"> {{ team.name }}</option>
          </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 mb-4 md:px-2">
        <label class="block text-grey-darker text-sm font-bold mb-2">
          Start time
        </label>
        <div class="relative">
          <select v-model="shift.start" :class="`shadow appearance-none border bg-white rounded py-2 px-3 w-full ${selectClass} leading-tight focus:outline-none focus:shadow-outline`">
            <option :value="false " disabled selected>Select start</option>
            <option v-for="time in getTimeStops('00:00', '23:45')" :key="time" :value="time"> {{ time }}</option>
          </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 mb-4 md:px-2">
        <label class="block text-grey-darker text-sm font-bold mb-2">
          End time
        </label>
        <div class="relative">
          <select v-model="shift.end" :class="`shadow appearance-none border bg-white rounded py-2 px-3 w-full ${selectClass} leading-tight focus:outline-none focus:shadow-outline`">
            <option :value="false " disabled selected>Select end</option>
            <option v-for="time in getTimeStops(shift.start, '23:45')" :key="time" :value="time"> {{ time }}</option>
          </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end border-t border-grey-lighter pt-4 mt-4">
        <custom-button class="mr-3" color="bg-red" icon="fas fa-times" @click="$emit('close')">
          Cancel
        </custom-button>
        <custom-button color="bg-blue" icon="fas fa-check" @click="$emit('submit', shift)">
          Confirm
        </custom-button>
      </div>
    </form>
  </modal>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import CustomButton from './CustomButton'
import Modal from './Modal'

export default {
  props: {
    showModal: Boolean,
    preloadShift: {
      type: Object,
      default: null
    }
  },
  components: {
    CustomButton,
    flatPickr,
    Modal
  },
  data () {
    return {
      shift: {
        date: null,
        employee: null,
        team: null,
        start: null,
        end: null
      },
      selectClass: 'text-grey',
      pickerConfig: {
        dateFormat: 'd-m-Y',
        mode: 'multiple'
      }
    }
  },
  computed: {
    employees () {
      return this.$store.getters['employees/employees']
    },
    selectedEmployee () {
      return this.shift.employee
    },
    teams () {
      return this.$store.getters['teams/teams']
    }
  },
  watch: {
    selectedEmployee (value) {
      if (value) {
        this.selectClass = 'text-grey-darker'
      }
    },
    preloadShift (value) {
      if (value) {
        this.shift = {
          ...value
        }
        console.log(value)
      }
    }
  },
  methods: {
    getTimeStops(start, end){
      let startTime = this.$moment(start, 'HH:mm')
      let endTime = this.$moment(end, 'HH:mm')
      
      if( endTime.isBefore(startTime) ){
        endTime.add(1, 'day')
      }

      const timeStops = []

      while(startTime <= endTime){
        timeStops.push(this.$moment(startTime).format('HH:mm'))
        startTime.add(15, 'minutes')
      }
      return timeStops
    }
  }
}
</script>

<style>

</style>
