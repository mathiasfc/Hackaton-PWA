import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
import withNetworkListener from './containers/NetworkListener';
import Storage from './helpers/storage';
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
const LoginPage = loadable(() => import('./screens/LoginPage'), {
  fallback: <div>Loading ...</div>,
});

const Payment = loadable(() => import('./screens/Payment'), {
  fallback: <div>Loading ...</div>,
});
const AccountDetails = loadable(() => import('./screens/AccountDetails'), {
  fallback: <div>Loading ...</div>,
});
const TypeTab = loadable(() => import('./screens/TypeTab'), {
  fallback: <div>Loading ...</div>,
});

let firstPage = Storage.getLocalStorage('viewOnboarding') ? HomePage : Onboarding;

const Router = () => (
  <>
    <Route path="/" exact component={firstPage} />
    <Route path="/home" exact component={HomePage} />
    <Route path="/list" component={List} />
    <Route path="/scan" component={ScanTab} />
    <Route path="/onboarding" component={Onboarding} />
    <Route path="/register" component={Register} />
    <Route path="/paytab" component={PayTabPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/payment" component={Payment} />
    <Route path="/account" component={AccountDetails} />
    <Route path="/typetab" component={TypeTab} />
  </>
);

export default withNetworkListener(Router);
