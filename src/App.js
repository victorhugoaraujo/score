import React, { useState, useEffect } from 'react';
import { useRouteMatch } from "react-router";

import Profile from './components/profile';
import ProfileCard from './components/profileCard';
import Card from './components/card';

import './App.css';

function App() {

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
        title: "Negocie suas dívidas",
        icon: "",
        text: "Você possui uma pendência com",
        image: "",
        small: "R$ 280,00",
        price: "por R$ 79,00",
        btn: "Negociar agora"
      },
      {
        title: "Propostas de crédito",
        icon: "",
        text: "Encontramos uma oferta de cartão de crédito!",
        image: "",
        small: "Anuidade grátis",
        price: "R$2000,00",
        btn: "Ver oferta"
      },
      {
        title: "Proteção ao RG",
        icon: "",
        text: "Faça seu plano de Proteção ao RG",
        image: "",
        small: "Assine por",
        price: "R$ 29,90",
        btn: "Assinar Plano"
      },
      {
        title: "Adquira seu plano de proteção ao RG",
        icon: "",
        text: "Ganhe agora 50% de desconto",
        image: "",
        small: "R$ 29,90",
        price: "por R$ 19,00",
        btn: "Assinar Plano"
      },
    ]
  }

  console.log(DATA.people);
  console.log(DATA.service);

  let match = useRouteMatch({
    path: "/:id",
  });

  console.log(match)

  const person = DATA.people.filter(item => item.id === match.params.id);
  const score = person.map(item => item.score);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    handleBackgroundColor();
  })

  const handleBackgroundColor = () => {
    if(score <= 30)
        return setBackgroundColor('backgroundRed');
    if(score >= 31 && score <= 60)
      return setBackgroundColor('backgroundYellow');
    else
      return setBackgroundColor('backgroundBlue');
  }

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
        <Card />
      </section>
    </div>
  );
}

export default App;
