import React from 'react';
import './App.css';
import ProfilePicture from './conponents/Picture';
import Header from './conponents/Header';
import InfoCard from './conponents/Info';
import SocialCard from './conponents/Social';

const App = () => (
  <>
    <ProfilePicture />
    <Header />
    <div className="container">
      <InfoCard />
      <SocialCard />
    </div>
  </>
);

export default App;
