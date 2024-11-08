import { createStore, ActionTypes } from '../src/store.js';

console.log('=== TALLY STORE TEST SUITE ===\n');

// Create store instance
const store = createStore();

// Test initial state
console.log('SCENARIO 1: Initial State Verification');
console.log('Initial state:', store.getState());
console.assert(store.getState().count === 0, 'Initial count should be 0');
console.log('-------------------\n');

// Test increment functionality
console.log('SCENARIO 2: Incrementing the Counter');
store.dispatch({ type: ActionTypes.ADD });
store.dispatch({ type: ActionTypes.ADD });
console.assert(store.getState().count === 2, 'Count should be 2 after two increments');
console.log('Current count:', store.getState().count);
console.log('-------------------\n');

// Test decrement functionality
console.log('SCENARIO 3: Decrementing the Counter');
store.dispatch({ type: ActionTypes.SUBTRACT });
console.assert(store.getState().count === 1, 'Count should be 1 after decrement');
console.log('Current count:', store.getState().count);
console.log('-------------------\n');

// Test reset functionality
console.log('SCENARIO 4: Resetting the Counter');
store.dispatch({ type: ActionTypes.RESET });
console.assert(store.getState().count === 0, 'Count should be 0 after reset');
console.log('Current count:', store.getState().count);
console.log('-------------------\n');

// Test subscription
console.log('Testing subscription functionality:');
const unsubscribe = store.subscribe((state) => {
  console.log('State changed:', state);
});

store.dispatch({ type: ActionTypes.ADD });
unsubscribe();

console.log('\n=== TEST SUITE COMPLETE ===');