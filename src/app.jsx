import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { history } from './routes/history';

import store from './store';

import Routes from './routes';
import Menu from './components/menu';

const AppContainer = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;

    margin: 0 auto;
    padding: 0;

    font-family: Verdana;
    overflow-y: hidden;
`;

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;

    &.faded {
      filter: grayscale(1) blur(1px);
    }

    &.spaced {
      margin-left: calc((100vw/7)*2);
    }
`;

const isMainScreen = () => history.location.pathname === '/';

if (isMainScreen()) {
  store.dispatch({ type: 'TOGGLE_MENU_FIX', value: false });
}

export default function App() {
  const { showMenu, fixedMenu } = useSelector(state => state);

  return (
    <AppContainer>
      <BackgroundContainer
        className={`
          ${(showMenu && !fixedMenu) && 'faded'}
          ${((showMenu || fixedMenu) && !isMainScreen()) && 'spaced'}
        `}
      >
        <Routes />
      </BackgroundContainer>
      <Menu />
    </AppContainer>
  );
}
