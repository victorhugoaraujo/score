import React from 'react';
import profileImage from '../../assets/sheldon.png';

import './styles.css';

const profile = () => {
  return (
    <div className='profile'>
      <img src={profileImage} className="profileImage" alt="profile" />
      <p className="profileText">Sheldon Cooper</p>
    </div>
  )
}

export default profile;
