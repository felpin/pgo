import React from 'react';
import { Container, Header, Link, Logo } from './App.styles';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo alt="logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </Link>
      </Header>
    </Container>
  );
};

export default App;
