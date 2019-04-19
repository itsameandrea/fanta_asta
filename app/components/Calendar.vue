<template>
  <div>
    <div class="py-6 md:flex justify-center items-center relative">
      <span @click="onPrev" class='w-6 h-6 bg-blue text-white rounded-full flex justify-center items-center content-center cursor-pointer'>
        <i class="fas fa-chevron-left"></i>
      </span>
      <span class="px-10 text-center"> {{ weekStart }} - {{ weekEnd }} </span>
      <span @click="onNext" class='w-6 h-6 bg-blue text-white rounded-full flex justify-center items-center content-center cursor-pointer'>
        <i class="fas fa-chevron-right"></i>
      </span>
      <custom-button class="absolute pin-r mr-3" icon="fas fa-plus" @click="$emit('ctaClick')" color="bg-green-dark"> Add shift </custom-button>
    </div>
    <div class="px-3">
      <div class="md:flex justify-between my-3">
        <div v-for="(day, index) in week" :key="index" class="text-center w-full">
          {{ day }}
        </div>
      </div>
      <div v-for="team in teams" :key="team.name">
        <div :class="`${team.class} py-2 pl-4 shadow-md rounded-lg`">
          {{ team.name }}
        </div>
        <div class="md:flex justify-between">
          <ul class="list-reset w-full px-1 bg-grey-light rounded-lg my-2 mx-1 px-2 min-h-15" v-for="day in week" :key="day">
            <li v-for="(shift, index) in dailyShiftsByTeam(day, team)" :key="index" class="text-center my-3">
              <span @click="$emit('selected', shift)" :class="`flex flex-col w-full ${shift.color} text-sm rounded-lg py-2 cursor-pointer hover:shadow-md`">
                <span class="font-semibold"> {{ shift.employee.name }} </span>
                <span> {{ shift.time }} </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton'

export default {
  components: {
    CustomButton
  },
  props: {
    teams: Array,
    shifts: Array
  },
  data () {
    return {
      dateFormat: 'DD/MM/YYYY',
      weekStart: this.$moment().startOf('isoweek').format('DD/MM/YYYY')
    }
  },
  computed: {
    weekEnd () {
      return this.$moment(this.weekStart, this.dateFormat).add(6, 'days').format(this.dateFormat)
    },
    week () {
      const now = this.$moment(this.weekStart, this.dateFormat)
      const end = this.$moment(this.weekEnd, this.dateFormat)
      const dates = []

      while (now.isSameOrBefore(end)) {
          dates.push(now.format('DD/MM/YYYY'));
          now.add(1, 'days')
      }
      return dates
    }
  },
  methods: {
    onNext () {
      this.weekStart = this.$moment(this.weekStart, this.dateFormat).add(7, 'days').format(this.dateFormat)
    },
    onPrev () {
      this.weekStart = this.$moment(this.weekStart, this.dateFormat).subtract(7, 'days').format(this.dateFormat)
    },
    dailyShiftsByTeam (day, team) {      
      const shifts = this.shifts.filter((shift) => {
        const formattedShift = this.$moment(shift.date, 'MM/DD/YYYY')
        const formattedDay = this.$moment(day, this.dateFormat).format('MM/DD/YYYY')
        return formattedShift.isSame(formattedDay) && shift.team === team.name
      })
      return shifts
    }
  }
}
</script>