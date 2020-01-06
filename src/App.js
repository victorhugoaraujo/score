import React, { useState, useEffect } from 'react';
import api from './services/api';
import { useRouteMatch } from "react-router";

import Profile from './components/profile';
import ProfileCard from './components/profileCard';
import Card from './components/card';

import './App.css';

function App() {
  async function onLoad(){
    console.log('onLoad');
    const response = await api.get('/users', {
      params: {
        name: 'Howard Wolowitz',
      }
    })

    console.log(response.data.score);

    const service = await api.get('/services', {
        params: {
          score: 95,
        }
      })

      console.log(service.data);
    
    setPessoa(response.data);
  }

  useEffect(() => {
    onLoad();
  }, [])

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

  let match = useRouteMatch({
    path: "/:id",
  });

  const [pessoa, setPessoa] = useState('');
  const person = DATA.people.filter(item => item.id === match.params.id);
  const score = person.map(item => item.score);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [service, setService] = useState([]);


  const handleBackgroundColor = () => {
    if(score <= 30)
        return setBackgroundColor('backgroundRed');
    if(score >= 31 && score <= 60)
      return setBackgroundColor('backgroundYellow');
    else
      return setBackgroundColor('backgroundBlue');
  }

  

  // const handleServices = () => {
  //   console.log('oi');
  //   let service = '';
  //   if(score <= 30)
  //     service = DATA.service.filter(item => item.score <= 30)
  //     console.log(service);
  //     return setService(service);
  //       // return setBackgroundColor('backgroundRed').
  //   // if(score >= 31 && score <= 60)
  //   //   return setBackgroundColor('backgroundYellow');
  //   // else
  //   //   return setBackgroundColor('backgroundBlue');
  // }

  useEffect(() => {
    handleBackgroundColor();
  })

  // useEffect(() => {
  //   if(score <= 30)
  //     return setService(DATA.service.filter(item => item.score <= 30));
  //   if(score >= 31 && score <= 60)
  //     return setService(DATA.service.filter(item => item.score >= 30));
    
  // }, [DATA.service, score]);

  return (
    <div className={`App ${backgroundColor}`}>
      <header className="App-header">
        {person.map(item =>
        <Profile
          key={item.name}
          profile={item}
        />
        )}
      </header>
      <section className="content">
      {person.map(item =>
        <ProfileCard
          key={item.name}
          profile={item}
        />
        )}
        {DATA.service.map(item =>
          <Card
          key={item.id}
          service={item}
          />
        )}
      </section>
    </div>
  );
}

export default App;
