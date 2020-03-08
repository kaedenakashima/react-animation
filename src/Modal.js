import React, { useState } from 'react';

const Modal = () => {
  return (
    <div>
      <h1>Modal</h1>
    </div>
  );
};

const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  return (
    <div>
      {on && <Modal />}
      <button onClick={() => toggle(true)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
