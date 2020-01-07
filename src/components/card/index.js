import React from 'react';
import './styles.css';

const Card = ({service, handleClick}) => {
  return (
    <div className="card">
      <div className="cardTitle">
        <i>{service.icon}</i>
        <h1 className={service.tagName === 'negocie' ? 'bgOrange' : 'bgBlue'}>{service.title}</h1>
      </div>
      <p className="cardText">{service.description}</p>
      <div className="row">
        <img src={service.image_url} className="cardImage" alt="Americanas" />
        <div className="cardPrice">
          <small>{service.value}</small>
          <p className="price">{service.finalValue}</p>
        </div>
      </div>
      <button className="btn" onClick={() => handleClick()}>{service.action}</button>
    </div>
  )
}

export default Card;
