import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Modal from './Modal';
import Checkout from './Checkout';
import Gesture from './Gesture';
import Accordion from './Accordion';
// import Waypoints from './Waypoints';
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
        <img src={logo} className='logo' alt='logo' />
        <button onClick={() => setNavOpen(!isNavOpen)} className='menu-button'>
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Modal />
        <Accordion />
        <Gesture />
      </main>
      <Checkout isOpen={isNavOpen} />
    </animated.div>
  );
};

export default App;
