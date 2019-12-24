import React from 'react';

import './styles.css';

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <p className="score">26</p>
      <div className="scoreDescription"><p>Sua pontuação é baixa</p></div>
      <p className="showMore">Saiba mais</p>
      <p className="scoreBar">0 a 30 31 a 60 61 a 100</p>
    </div>
  )
}

export default ProfileCard;
