import { AppState } from './app.state.types'
import { Config } from '../config/config.types'
import { actions, mutations } from './app.state'
import Store from 'beedle'

const initialState = {
  megaMenuActive: true
}

const consolidateConfigIntoState = (config: Config): AppState => {
  return {
    ...config,
    ...initialState
  }
}

export const appStore = new Store({
  actions,
  mutations,
  initialState: consolidateConfigIntoState(this.config)
})
