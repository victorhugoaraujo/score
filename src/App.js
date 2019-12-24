import React from 'react';

import Profile from './components/profile';
import ProfileCard from './components/profileCard';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
      <section className="content">
        <ProfileCard />
      </section>
    </div>
  );
}

export default App;
