import * as types from '../actions/actionTypes';

const initialState = {
    joke: 'Placeholder',
    pic: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'
}
export default function jokeReducer(state = initialState.joke, action) {
  switch(action.type) {
    case types.LOAD_JOKE_SUCCESS:
     return action.joke
    default: 
      return state;
  }
}