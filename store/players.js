import { parsePlayersFile } from '@/utils'

export const state = () => ({
  players: {}
})

export const getters = {
  players: state => state.players
}

export const mutations = {
  setPlayers(state, players) {
    state.players = players
  }
}

export const actions = {
  async createPlayersFromSheet({ dispatch }, file) {
    const players = await parsePlayersFile(file)
    
    const batches = []
    batches.push(this.$fireStore.batch())

    players.forEach((player, index) => {
      const ref = this.$fireStore.collection('players').doc(player.id.toString())
      batches[batches.length - 1].set(ref, player)

      if (index === 499) {
        batches.push(this.$fireStore.batch())
      }
    })

    await Promise.all(batches.map(async batch => await batch.commit()))

    dispatch('getPlayers')
  },
  async getPlayers({ commit }) {
    // const snapshot = await this.$fireStore
    //   .collection('players')
    //   .orderBy('name')
    //   .get()

    // const players = snapshot.docs.map(doc => doc.data())
    const players = [{
      role: 'P',
      name: 'Buffon',
      team: 'Juventus'
    },{
      role: 'A',
      name: 'Ronaldo',
      team: 'Juventus'
    }]
    commit('setPlayers', players)
  }
}