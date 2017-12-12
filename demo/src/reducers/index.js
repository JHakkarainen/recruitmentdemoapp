import { combineReducers } from 'redux'
import joke from './JokeReducer'

const rootReducer = combineReducers({
  joke
})

export default rootReducer