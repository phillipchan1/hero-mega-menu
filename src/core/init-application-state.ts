import { AppState } from './app.state.types'
import { Config } from '../config/config.types'

const initialState = {
  megaMenuActive: true
}

export const initApplicationState = (config: Config): AppState => {
  return {
    ...config,
    ...initialState
  }
}
