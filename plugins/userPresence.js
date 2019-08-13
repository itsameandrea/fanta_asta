export default async ({ store, app }) => {
  await store.dispatch('users/updateOnlineStatus')
}