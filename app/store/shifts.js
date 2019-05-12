import { CREATE_RECORD, FETCH_RECORDS } from '@/store/lib/actions'

const API_ENDPOINT = '/shifts'

export const state = () => ({
  shifts: {}
})

export const getters = {
  shifts: state => state.shifts
}

export const mutations = {
  addShift (state, payload) {
    state.shifts = [...state.shifts, payload]
  }
}

export const actions = {
  create: CREATE_RECORD({ endpoint: API_ENDPOINT, module: 'shifts', attr: 'shifts' }),
  getAll: FETCH_RECORDS({ endpoint: API_ENDPOINT, module: 'shifts', attr: 'shifts' })
}