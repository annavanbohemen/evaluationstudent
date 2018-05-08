import {ADD_BATCH, GET_BATCHES} from '../actions/batches'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
        return payload

    case ADD_BATCH:
      return [...state, payload]

    default:
      return state
  }
}




// case UPDATE_BATCH:
// return {
//   ...state,
//   [payload.id]: payload
// }

// case UPDATE_BATCHES:
// return payload.reduce((games, game) => {
//   games[game.id] = game
//   return games
// }, {})
