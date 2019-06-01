import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as styles from './style';

function List() {
  return (
    <styles.AppContainer>
      <styles.Header className="App-header">
        <styles.LogoApp src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/">
          Ir Para Home
        </Link>
      </styles.Header>
    </styles.AppContainer>
  );
}

export default List;
