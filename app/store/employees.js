export const state = () => ({
  employees: [
    {
      id: 1,
      name: 'Andrea'
    },
    {
      id: 2,
      name: 'Nina'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ]
})

export const getters = {
  employees (state) {
    return state.employees
  }
}

export const mutations = {

}

export const actions = {

}