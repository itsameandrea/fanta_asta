export const state = () => ({
  selectedLeague: null
})

export const getters = {
  selectedLeague: (state) => state.selectedLeague
}

export const mutations = {
  setSelectedLeague(state, league) {
    state.league = league
  }
}

export const actions = {
  async createLeague({ commit, dispatch, rootState }, { name, passcode, emails: users }) {
    const league = await this.$fireStore
      .collection('leagues')
      .add({
        name,
        admin: rootState.users.currentUser,
        passcode,
        users: [ ...users, rootState.users.currentUser ]
      })

    await dispatch('users/addUsersToLeague', {
      league: { id: league.id, name },
      users
    }, { root: true })

    commit('setSelectedLeague', league.data())
  }
}