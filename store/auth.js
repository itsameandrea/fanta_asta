import Cookies from 'js-cookie'

export const state = () => ({

})

export const getters =  {

}

export const mutations = {

}

export const actions = {
  async login({ dispatch }, { email, password }) {
    const { user } = await this.$fireAuth.signInWithEmailAndPassword(email, password)
    
    const token = await this.$fireAuth.currentUser.getIdToken(true)
    Cookies.set('access_token', token)

    dispatch('users/getCurrentUser', { user }, { root: true })
  },
  async register({ dispatch }, { email, password }) {
    const { user } = await this.$fireAuth.createUserWithEmailAndPassword(email, password)

    console.log(user)
    
    await this.$fireStore
      .collection('users')
      .doc(user.uid)
      .set({ email: user.email, uid: user.uid, online: false })
    
    const token = await this.$fireAuth.currentUser.getIdToken(true)
    Cookies.set('access_token', token)
    
    dispatch('users/getCurrentUser', { user }, { root: true })
  }
}