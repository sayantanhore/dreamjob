function reducers(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, { name: action.name });
    case 'CHANGE_STATE':
      return Object.assign({}, state, { changeState: true });
    case 'NO_CHANGE_STATE':
      return Object.assign({}, state, { changeState: false });
    default:
      return state;
  }
}

export default reducers;