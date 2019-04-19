export const state = () => ({
  teams: [
    { name: 'bar', class: 'bg-red text-white' },
    { name: 'service', class: 'bg-blue text-white' }
  ]
})

export const getters = {
  teams (state) {
    return state.teams
  }
}

export const mutations = {

}

export const actions = {

}