import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Player from './Components/Player';
import UserPage from './Components/UserPage';

function App() {
  return (
    <div className="App">

      <Header />

      
      <UserPage />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
