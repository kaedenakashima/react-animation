import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import Routes from './Routes';
import Nav from './Nav';
import Checkout from './Checkout';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });
  return (
    <animated.div className='App' style={fade}>
      <header className='App-header'>
        <img src={logo} className='logo' />
        <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Routes />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
