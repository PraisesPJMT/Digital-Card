import React from 'react';
import Profile from '../assets/Profile Picture.jpeg';

const ProfilePicture = () => (
  <div className="profile-picture">
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
    <img
      className="profile-image"
      src={Profile}
      alt="Praises Tula Picture"
    />
  </div>
);

export default ProfilePicture;
