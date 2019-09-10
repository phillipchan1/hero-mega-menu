import { AppState } from './app.state.types'

export const actions = {
  setMegaMenuStatus(context, payload) {
    context.commit('setMegaMenuStatus', payload)
  },
  activateState(context) {
    context.commit('activateState', '')
  }
}

export const mutations = {
  setMegaMenuStatus(state, payload) {
    state.megaMenuActive = payload

    return state
  },
  activateState(state, payload) {
    state.stateActive = true

    return state
  }
}
