export const state = () => ({
  detail: {},
})

export const mutations = {
  update(state, athlete) {
    state.detail = Object.assign({}, athlete)
  },
  empty(state, athlete) {
    state.detail = Object.assign({})
  },
}
