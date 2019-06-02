import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
import withNetworkListener from './containers/NetworkListener';
/* import Home from './screens/App';
import List from './screens/List'; */

const HomePage = loadable(() => import('./screens/HomePage'), {
  fallback: <div>Loading ...</div>,
});
const List = loadable(() => import('./screens/List'), {
  fallback: <div>Loading ...</div>,
});
const ScanTab = loadable(() => import('./screens/ScanTab'), {
  fallback: <div>Loading ...</div>,
});
const Onboarding = loadable(() => import('./screens/Onboarding'), {
  fallback: <div>Loading ...</div>,
});
const Register = loadable(() => import('./screens/Register'), {
  fallback: <div>Loading ...</div>,
});
const PayTabPage = loadable(() => import('./screens/PayTabPage'), {
  fallback: <div>Loading ...</div>,
});
const Payment = loadable(() => import('./screens/Payment'), {
  fallback: <div>Loading ...</div>,
});

const Router = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/list" component={List} />
    <Route path="/scan" component={ScanTab} />
    <Route path="/onboarding" component={Onboarding} />
    <Route path="/register" component={Register} />
    <Route path="/paytab" component={PayTabPage} />
    <Route path="/payment" component={Payment} />
  </>
);

export default withNetworkListener(Router);
