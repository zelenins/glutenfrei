import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ProductsPage from './products/ProductsPage';
import PageNotFound from './PageNotFound';

 
const App = () => {
  return(
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/products' component={ProductsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App; 