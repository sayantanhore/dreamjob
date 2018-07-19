function reducers(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_NAME':
      console.log(action);
      return Object.assign(state, { name: action.name });
    default:
      return state;
  }
}

export default reducers;