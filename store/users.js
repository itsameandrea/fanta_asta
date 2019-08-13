export const state = () => ({
  currentUser: null,
  allUsers: [],
  loggedInUsers: []
})

export const getters =  {
  currentUser: (state) => state.currentUser,
  allUsers: (state) => state.allUsers,
  loggedInUsers: (state) => state.loggedInUsers
}

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  },
  setAllUsers(state, users) {
    state.allUsers = users
  },
  addLoggedInUsers(state, users) {
    state.loggedInUsers = users
  }
}

export const actions = {
  async getCurrentUser({ commit, dispatch }, { user }) {
    let currentUser = await this.$fireStore
      .collection('users')
      .doc(user.uid)
      .get()
    
    currentUser = currentUser.data()

    commit('setCurrentUser', currentUser)

    await dispatch('updateOnlineStatus')
  },
  async getLoggedInUsers({ commit }) {
    this.$fireStore.collection('users')
      .where('league', '==', 'FantaCriteo')
      .where('online', '==', true)
      .onSnapshot((snapshot) => {
        commit('addLoggedInUsers', snapshot.docs.map(doc => doc.data()))
      })
  },
  async getAllUsers({ commit }) {
    const snapshot = await this.$fireStore.collection('users')
      .where('league', '==', 'FantaCriteo')
      .get()

    commit('setAllUsers', snapshot.docs.map(doc => doc.data()))
  },
  async addUsersToLeague({ state }, { league, users }) {
    // todo - invitation logic

    const batch = this.$fireStore.batch()

    users.forEach(user => {
      const ref = this.$fireStore.collection('users').doc(user)
      batch.set(ref, {
        league,
        email: user
      })
    })

    const ref = this.$fireStore.collection('users').doc(state)
    batch.update(ref, { league })

    return await batch.commit()
  },
  async updateOnlineStatus({ state }, userUid = null) {
    if (state.currentUser) {
      const { uid } = state.currentUser
      const whoIsOnlineRef = this.$fireDb.ref('.info/connected')


      whoIsOnlineRef.on('value', (snapshot) => {
        this.$fireDb.ref(`/status/${uid}`)
          .onDisconnect()
          .set('offline')
          .then(() => {
            this.$fireStore
              .collection('users')
              .doc(uid)
              .update({ online: true })
            
            this.$fireDb.ref(`/status/${uid}`).set('online')
          })
      })
    }
  }
}