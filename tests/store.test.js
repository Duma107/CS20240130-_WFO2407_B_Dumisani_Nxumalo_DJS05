import { createStore, ActionTypes } from '../src/store.js';

// Test Suite
console.log('=== TALLY STORE TEST SUITE ===\n');

// Helper to run scenarios
const runScenario = (name, tests) => {
  console.log(`🧪 SCENARIO: ${name}`);
  tests();
  console.log('-------------------\n');
};

// Create fresh store for testing
const store = createStore();

// SCENARIO 1: Initial State
runScenario('Initial State Verification', () => {
  console.log('Initial state:', store.getState());
  console.assert(store.getState().count === 0, 'Initial count should be 0');
});

// SCENARIO 2: Incrementing
runScenario('Increment Operations', () => {
  console.log('Starting count:', store.getState().count);
  store.dispatch({ type: ActionTypes.ADD });
  console.log('After first increment:', store.getState().count);
  store.dispatch({ type: ActionTypes.ADD });
  console.log('After second increment:', store.getState().count);
  console.assert(store.getState().count === 2, 'Count should be 2 after two increments');
});

// SCENARIO 3: Decrementing
runScenario('Decrement Operations', () => {
  console.log('Starting count:', store.getState().count);
  store.dispatch({ type: ActionTypes.SUBTRACT });
  console.log('After decrement:', store.getState().count);
  console.assert(store.getState().count === 1, 'Count should be 1 after decrement');
});

// SCENARIO 4: Reset
runScenario('Reset Operations', () => {
  console.log('Starting count:', store.getState().count);
  store.dispatch({ type: ActionTypes.RESET });
  console.log('After reset:', store.getState().count);
  console.assert(store.getState().count === 0, 'Count should be 0 after reset');
});

// SCENARIO 5: Subscribe Functionality
runScenario('Subscribe Functionality', () => {
  let lastState = null;
  const unsubscribe = store.subscribe((state) => {
    lastState = state;
    console.log('Subscriber received state:', state);
  });
  
  console.log('Testing subscription...');
  store.dispatch({ type: ActionTypes.ADD });
  console.assert(lastState.count === 1, 'Subscriber should receive updated state');
  
  console.log('Testing unsubscribe...');
  unsubscribe();
  store.dispatch({ type: ActionTypes.ADD });
  console.assert(lastState.count === 1, 'After unsubscribe, subscriber should not receive updates');
});

// Reset store for any further testing
store.dispatch({ type: ActionTypes.RESET });
console.log('\n=== TEST SUITE COMPLETE ===');