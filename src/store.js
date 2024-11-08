// Action Types
export const ActionTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  RESET: 'RESET'
};

/**
 * Creates a Redux-inspired store for state management
 * @param {Object} initialState - Initial state object
 * @returns {Object} Store interface
 */
export const createStore = (initialState = { count: 0 }) => {
  let currentState = { ...initialState };
  let subscribers = [];

  const getState = () => {
    return { ...currentState };
  };

  const subscribe = (listener) => {
    subscribers.push(listener);
    return () => {
      subscribers = subscribers.filter(sub => sub !== listener);
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
        return {
          ...state,
          count: state.count + 1
        };
      case ActionTypes.SUBTRACT:
        return {
          ...state,
          count: state.count - 1
        };
      case ActionTypes.RESET:
        return {
          ...state,
          count: 0
        };
      default:
        return state;
    }
  };

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    subscribers.forEach(subscriber => subscriber(currentState));
    console.log('State updated:', currentState);
  };

  return {
    getState,
    dispatch,
    subscribe
  };
};