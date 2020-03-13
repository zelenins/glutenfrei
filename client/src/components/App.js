import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ProductsPage from './products/productsPage';
import PageNotFound from './pageNotFound';

 
const App = () => {
  return(
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route exact path='/products' component={ProductsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App; 