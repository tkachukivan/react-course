import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders} />
          <Route path="/" component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
