import React from 'react';

import Profile from './components/profile';
import ProfileCard from './components/profileCard';
import Card from './components/card';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
      <section className="content">
        <ProfileCard />
        <Card />
      </section>
    </div>
  );
}

export default App;
