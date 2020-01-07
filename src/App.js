import React, { useState, useEffect } from 'react';
import api from './services/api';
import { useRouteMatch } from "react-router";

import Profile from './components/profile';
import ProfileCard from './components/profileCard';
import Card from './components/card';

import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [data, setData] = useState([]);
  const [service, setService] = useState([]);
  const [score, setScore] = useState();
  const [backgroundColor, setBackgroundColor] = useState('');
  
  let match = useRouteMatch({
    path: "/:id",
  });
  
  useEffect(() => {
    async function onLoad(){
      const response = await api.get('/users', {
        params: {
          tagName: match.params.id,
        }
      });

      setData([response.data])
      setScore(response.data.score);
      setIsLoading(false);
    }
    onLoad();
  }, [match.params.id])

  useEffect(() => {
    async function loadServices(){
      if(score){
        const result = await api.get('/services', {
          params: {
            score: score,
          }
        });
        setService(result.data);
      }
    }
    loadServices();
  }, [score])

  const handleBackgroundColor = () => {
    if(score <= 30)
        return setBackgroundColor('backgroundRed');
    if(score >= 31 && score <= 60)
      return setBackgroundColor('backgroundYellow');
    else
      return setBackgroundColor('backgroundBlue');
  }

  useEffect(() => {
    handleBackgroundColor();
  })

  const handleClick = () => {
    let newScore = parseInt(score) + 10;
    if(score >= 0 && score <= 100){
      if(newScore >= 100){
        setScore(100);
      }
      else{
        setScore(newScore);
      }
    }
  }

  useEffect(() => {
    async function updateScore(){
      if(score){
        const response = await api.put('/users', {
          id: data.id,
          score: score,
        });
        setScore(response.data.score);

      }
    }
    updateScore();
  }, [data.id, score])


  return isLoading ? <div>Loading</div> : 
    <div className={`App ${backgroundColor}`}>
      <header className="App-header">
        {data.map(item =>
        <Profile
          key={item._id}
          profile={item}
        />
        )}
      </header>
      <section className="content">
      {data.map(item =>
        <ProfileCard
          key={item.name}
          profile={item}
          score={score}

        />
        )}
        <div className="cardContainer">
          {service.map(item =>
            <Card
            key={item._id}
            service={item}
            handleClick={handleClick}
            />
          )}
        </div>
      </section>
    </div>
}

export default App;
