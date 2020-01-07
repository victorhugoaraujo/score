import React from 'react';
import './styles.css';

const ProfileCard = ({profile, score}) => {
  return (
    <div className="container">
      <p className="score">{score}</p>
      <div className="scoreDescription"><p>Sua pontuação é {profile.scoreDescription}</p></div>
      <p className="showMore">Saiba mais</p>
      <p className="scoreBar">
        <span>0 a 30</span>
        <span> 31 a 60</span>
        <span>61 a 100</span>
      </p>
      <div className="bar"></div>
    </div>
  )
}

export default ProfileCard;
