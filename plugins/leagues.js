export default async ({ store, app }) => {
  await store.dispatch('leagues/getLeague')
}