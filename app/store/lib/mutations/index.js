export default {
  MERGE_RECORDS: (state, { records, module, attr }) => {
    console.log('records: ', records)
    state[module][attr] = {
      ...state[module][attr],
      ...records
    }
  }
}