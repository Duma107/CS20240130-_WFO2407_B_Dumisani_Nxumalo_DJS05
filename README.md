# Tally Store

A lightweight, Redux-inspired state management implementation for managing a tally counter. This project demonstrates core state management concepts including actions, reducers, and subscriptions in a simple, understandable way.

## Features

- Redux-inspired architecture
- Immutable state updates
- Action creators for state modifications
- Subscription system for state changes
- Comprehensive test suite

## Installation

```bash
npm install
```

## Usage

Run the test suite to see the store in action:

```bash
npm test
```

### Store API

```javascript
import { createStore, ActionTypes } from './src/store.js';

// Create a new store instance
const store = createStore();

// Get current state
store.getState(); // { count: 0 }

// Subscribe to state changes
const unsubscribe = store.subscribe((state) => {
  console.log('State updated:', state);
});

// Dispatch actions
store.dispatch({ type: ActionTypes.ADD }); // Increments count
store.dispatch({ type: ActionTypes.SUBTRACT }); // Decrements count
store.dispatch({ type: ActionTypes.RESET }); // Resets count to 0

// Unsubscribe from state changes
unsubscribe();
```

### Available Actions

- `ADD`: Increments the counter by 1
- `SUBTRACT`: Decrements the counter by 1
- `RESET`: Resets the counter to 0

## Project Structure

```
├── src/
│   └── store.js         # Core store implementation
├── tests/
│   └── store.test.js    # Test suite
├── package.json
└── README.md
```

## Implementation Details

The store implementation follows key principles of Redux:

1. **Single Source of Truth**: State is stored in a single object
2. **State is Read-Only**: State can only be modified through dispatched actions
3. **Changes are Made with Pure Functions**: A reducer function handles state updates
4. **Immutable Updates**: State is never directly mutated

## Testing

The test suite verifies:

1. Initial state initialization
2. Increment functionality
3. Decrement functionality
4. Reset functionality
5. Subscription system

## License

MIT