import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const QueenToast = ({ children, other }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>About us</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">You’re a queen and will be successful so never doubt yourself! We all need a chance so let’s help each other and change the world together!!</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron className="jumbotron">
      <h1 className="header">Queen's Web</h1>
      <QueenToast>
        <p>Started in 2020. Reshae Alagbada(Founder) wanted to create a company where she can give back. With the help of her co-founder, Safia Hirsi, Queen's Web grew from an ideal to reality.
        Queen’s Web is a company to help women gain their professional experience in UX/UI or software development. Queen’s Web pairs UX/UI with software engineers together so they can create and have that experience together!</p>
        <span role="img" aria-label="tada">
          🕷️
        </span>
      </QueenToast>
    </Jumbotron>
  </Container>
);

export default App;
