import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
import withNetworkListener from './containers/NetworkListener';
/* import Home from './screens/App';
import List from './screens/List'; */

const Home = loadable(() => import('./screens/Home'), {
  fallback: <div>Loading ...</div>,
});
const List = loadable(() => import('./screens/List'), {
  fallback: <div>Loading ...</div>,
});
const ScanTab = loadable(() => import('./screens/ScanTab'), {
  fallback: <div>Loading ...</div>,
});

const Router = () => (
  <>
    <Route path="/" exact component={ScanTab} />
    <Route path="/list" component={List} />
  </>
);

export default withNetworkListener(Router);
