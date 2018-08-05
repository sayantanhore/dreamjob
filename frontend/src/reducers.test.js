import reducers from './reducers';

describe('Reducers', () => {
  it ('sets name into state', () => {
    const action = {
      type: 'SET_NAME',
      name: 'foo'
    };

    const result = reducers({}, action);
    expect(result).toEqual({ name: 'foo' });
  });

  it ('enables routing to another component', () => {
    const action = {
      type: 'CHANGE_STATE'
    };

    const result = reducers({}, action);
    expect(result).toEqual({ changeState: true });
  });

  it ('disables routing to another component', () => {
    const action = {
      type: 'NO_CHANGE_STATE'
    };

    const result = reducers({}, action);
    expect(result).toEqual({ changeState: false });
  });

  it ('returns initial state', () => {
    const action = {
      type: 'NOT_DEFINED'
    };

    const result = reducers({}, action);
    expect(result).toEqual({});
  });
});