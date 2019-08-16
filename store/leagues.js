import { slugify } from '@/utils'

export const state = () => ({
  selectedLeague: null
})

export const getters = {
  selectedLeague: (state) => state.selectedLeague
}

export const mutations = {
  setSelectedLeague(state, league) {
    state.selectedLeague = league
  }
}

export const actions = {
  async createLeague({ commit, dispatch, rootState }, { name, passcode, emails: users }) {
    await this.$fireStore
      .collection('leagues')
      .doc(name)
      .set({
        name,
        slug: slugify(name),
        admin: rootState.users.currentUser,
        passcode,
        users: [ ...users ]
      })
    
    const league = await this.$fireStore
      .collection('leagues')
      .doc(name)
      .get()

    await dispatch('users/addLeagueToUsers', {
      league: name,
      users: [rootState.users.currentUser]
    }, { root: true })

    commit('setSelectedLeague', league.data())
  },
  async addUserToLeague({ commit }, { user, league}) {
    const users = league.users.filter(u => u !== user.email)
    
    users.push(user)
    
    await this.$fireStore
      .collection('leagues')
      .doc(league.name)
      .update({
        users
      })
    
    const leagueSnapshot = await this.$fireStore
      .collection('leagues')
      .doc(league.name)
      .get()

    commit('setSelectedLeague', leagueSnapshot.data())
  }
}