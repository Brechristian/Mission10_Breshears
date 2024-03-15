import React from 'react';
import './App.css';
import Header from './Header';
import TeamList from './Teams/TeamList';

function App() {
  return (
    <div className="App">
      <Header title="The Bowling League. Where Champions are Born." />
      <TeamList />
    </div>
  );
}

export default App;
