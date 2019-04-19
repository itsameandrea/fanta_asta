import moment from 'moment'

export const state = () => ({
  shifts: [
    {
      employee: {
        name: 'Andrea'
      },
      date: new Date('04/09/2019'),
      time: '08:00 - 17:00',
      team: 'bar',
      color: 'bg-red-lighter'
    },
    {
      employee: {
        name: 'Andrea'
      },
      date: new Date('04/10/2019'),
      time: '08:00 - 17:00',
      team: 'bar',
      color: 'bg-red-lighter'
    },
    {
      employee: {
        name: 'Chris'
      },
      date: new Date('04/10/2019'),
      time: '07:00 - 16:00',
      team: 'bar',
      color: 'bg-red-lighter'
    },
    {
      employee: {
        name: 'Nina'
      },
      date: new Date('04/09/2019'),
      time: '11:00 - 19:00',
      team: 'service',
      color: 'bg-blue-lighter'
    }
  ]
})

export const getters = {
  shifts (state) {
    return state.shifts
  }
}

export const mutations = {
  addShift (state, payload) {
    state.shifts = [...state.shifts, payload]
  }
}

export const actions = {
  async create ({ commit, rootState }, payload) {
    let dates = payload.date.split(', ')

    dates = dates.map((date) => {
      const shift = {
        employee: rootState.employees.employees.find((emp) => emp.id === payload.employee),
        date: new Date(moment(date, 'DD-MM-YYYY').format('MM/DD/YYYY')),
        time: `${payload.start} - ${payload.end}`,
        team: payload.team,
        color: 'bg-red-lighter'
      }
      commit('addShift', shift)
      return shift
    })

    // API CALL TO CREATE SHIFTS
  }
}