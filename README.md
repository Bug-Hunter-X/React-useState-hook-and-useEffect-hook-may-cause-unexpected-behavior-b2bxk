# React useState and useEffect Bug

This repository demonstrates a potential bug in React applications involving the `useState` and `useEffect` hooks.  Specifically, calling the state update function multiple times within a single render cycle can lead to unexpected behavior, as only the last update is processed.

## Bug Description

The bug arises when the `setCount` function within the `handleClick` function in `bug.js` is called twice. Because of the asynchronous nature of state updates, the second call may override the first, causing the counter to increment only by one instead of two.

## Solution

The solution, demonstrated in `bugSolution.js`, involves using functional updates with `useState`.  This ensures the update function receives the most current state value, preventing unexpected behavior.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Click the 'Increment' button. Observe that the counter only increments by 1, even though `setCount` is called twice.

## How to fix the bug

1. Replace the `handleClick` function with the one demonstrated in `bugSolution.js`
2. Re-run `npm start`. Now the counter should correctly increment by two.  
