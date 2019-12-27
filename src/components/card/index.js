import React from 'react';
import './styles.css';
import americanas from '../../assets/americanas.png'

const Card = () => {
  return (
    <div className="container card">
      <div className="cardTitle">
        <i>ico</i>
        <h1>Negocie suas dividas</h1>
      </div>
      <p className="cardText">Voce possui uma pendencia com</p>
      <div className="row">
        <img src={americanas} className="cardImage" alt="Americanas" />
        <div className="cardPrice">
          <small>R$ 280,00</small>
          <p className="price">por R$79,00</p>
        </div>
      </div>
      <button className="btn">Negociar agora</button>
    </div>
  )
}

export default Card;
