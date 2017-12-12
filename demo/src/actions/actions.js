export function loadJoke() {
  return function(dispatch) {
    return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => { return response.json()})
    .then(joke => {
      dispatch(loadJokeSuccess(joke.value))
    })
  }
}

export function loadJokeSuccess(joke) {
  return {type: 'LOAD_JOKE_SUCCESS', joke}
}