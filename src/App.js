import React, { useState, useEffect } from 'react';
import api from './services/api';
import { useRouteMatch } from "react-router";

import Profile from './components/profile';
import ProfileCard from './components/profileCard';
import Card from './components/card';

import './App.css';

function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [data, setData] = useState({ person: []})
  const [service, setService] = useState([]);
  const [score, setScore] = useState();
  const [newScore, setNewScore] = useState();
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

      console.log(response)
  
      const result = await api.get('/services', {
          params: {
            score: score,
          }
        });

        setData({person: [response.data]})
        setService(result.data);
        setScore(response.data.score);
        setIsLoading(false);
    }
    onLoad();
  }, [match.params.id, score])

  var DATA = {
    people: [
      {
        id: "sheldon",
        name: "Sheldon Copper",
        image: require('./assets/sheldon.png'),
        score: 26,
        scoreDescription: 'baixa',
      },
      {
        id: "leonard",
        name: "Leonard Hofstadter",
        image: require('./assets/leonard.jpg'),
        score: 40,
        scoreDescription: 'baixa',
      },
      {
        id: "howard",
        name: "Howard Wolowitz",
        image: require('./assets/howard.jpeg'),
        score: 74,
        scoreDescription: 'media',
      },
      {
        id: "raj",
        name: "Rajesh Koothrappali",
        image: require('./assets/raj.jpeg'),
        score: 95,
        scoreDescription: 'alta',
      }
    ],
    service: [
      {
        id: 1,
        title: "Negocie suas dívidas",
        icon: "",
        text: "Você possui uma pendência com",
        image: require('./assets/americanas.png'),
        small: "R$ 280,00",
        price: "por R$ 79,00",
        btn: "Negociar agora",
        score: 30,
      },
      {
        id: 2,
        title: "Propostas de crédito",
        icon: "",
        text: "Encontramos uma oferta de cartão de crédito!",
        image: require('./assets/americanas.png'),
        small: "Anuidade grátis",
        price: "R$2000,00",
        btn: "Ver oferta",
        score: 60,
      },
      {
        id: 3,
        title: "Proteção ao RG",
        icon: "",
        text: "Faça seu plano de Proteção ao RG",
        image: require('./assets/americanas.png'),
        small: "Assine por",
        price: "R$ 29,90",
        btn: "Assinar Plano",
        score: 50,
      },
      {
        id: 4,
        title: "Adquira seu plano de proteção ao RG",
        icon: "",
        text: "Ganhe agora 50% de desconto",
        image: require('./assets/americanas.png'),
        small: "R$ 29,90",
        price: "por R$ 19,00",
        btn: "Assinar Plano",
        score: 90,
      },
    ]
  }

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

  async function handleClick () {
    if(score >= 0 && score <= 100){
      setNewScore(parseInt(score) + 10);
      if(newScore >= 100)
       return setScore(100);
      setScore(newScore);
    }

    // const response = await api.put('/users', {
    //   id: data.person.id,
    //   score: newScore,
    // });
    // console.log(response);
    // updateScore();
  }

  async function updateScore(){
    const response = await api.put('/users', {
      id: data.person.id,
      score: newScore,
    });
  }

  // useEffect(() => {
  //   async function updateScore(){
  //     const response = await api.put('/users', {
  //       id: data.person.id,
  //       score: newScore,
  //     });
  //     console.log(response);
  //   }
  //   updateScore();
  // }, [data.person.id, newScore])

  console.log(service);
  console.log('score', score);
 
  return isLoading ? <div>Loading</div> : 
    <div className={`App ${backgroundColor}`}>
      <header className="App-header">
        {data.person.map(item =>
        <Profile
          key={item._id}
          profile={item}
        />
        )}
      </header>
      <section className="content">
      {data.person.map(item =>
        <ProfileCard
          key={item.name}
          profile={item}
        />
        )}
        {service.map(item =>
          <Card
          key={item._id}
          service={item}
          handleClick={handleClick}
          />
        )}
      </section>
    </div>
}

export default App;
