import { getUserFromCookie } from '@/utils'

export const actions = {

  async nuxtServerInit ({ commit, dispatch }, { req }) {
    const { user_id: uid } = getUserFromCookie(req)

    if (uid) {
      const user = await this.$fireStore
        .collection('users')
        .doc(uid)
        .get()
      
      
      if (user) {
        await commit('users/setCurrentUser', user.data())
      }
    }
  }
}