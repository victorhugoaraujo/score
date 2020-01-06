import React from 'react';
import './styles.css';

const Card = ({service}) => {
  return (
    <div className="container card">
      <div className="cardTitle">
        <i>{service.icon}</i>
        <h1>{service.title}</h1>
      </div>
      <p className="cardText">{service.text}</p>
      <div className="row">
        <img src={service.image} className="cardImage" alt="Americanas" />
        <div className="cardPrice">
          <small>{service.small}</small>
          <p className="price">{service.price}</p>
        </div>
      </div>
      <button className="btn">{service.btn}</button>
    </div>
  )
}

export default Card;
