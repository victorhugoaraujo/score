import React from 'react';

import './styles.css';

const profile = ({profile}) => {
  return (
    <div className='profile'>
      <img src={profile.image} className="profileImage" alt="profile" />
      <p className="profileText">{profile.name}</p>
    </div>
  )
}

export default profile;
