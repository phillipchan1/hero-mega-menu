import { AppState } from './app.state.types'
import { Config } from '../config/config.types'
import { actions, mutations } from './app.state'
import Store from 'beedle'

const initialState = {
  megaMenuActive: true
}

export const getStore = (config: Config) => {
  const consolidated = {
    ...config,
    ...initialState
  }

  return new Store({
    actions,
    mutations,
    initialState: consolidated
  })
}
