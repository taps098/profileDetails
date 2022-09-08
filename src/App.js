import React from 'react';
import UserProfile from './UserProfile';
import './App.css';

/**
 * Function to render the entire component.
 * @returns App
 */
function App() {
  return (
    <div data-testid='app' className="App">
      <UserProfile />
    </div>
  );
}

export default App;
