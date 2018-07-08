function reducers(state = {}, action) {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign(state, { name: action.text });
    default:
      return state;
  }
}

export default reducers;