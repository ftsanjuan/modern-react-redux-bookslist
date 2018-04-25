// All reducers get called with a state and an action.
// State argument is not application state, only the state
// this reducer is responsible for.
// Notes:
// * Reducer should also be able to handle initial state
//   when state = undefined, so set default state to null
// * Reducer must not mutate state, it must return a fresh object
//   that was supplied.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}