import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/Components/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Components/Carousel';
import { Heros } from './layouts/HomePage/Components/Heros';
import { LibraryServices } from './layouts/HomePage/Components/LibraryServices';
import { Footer } from './layouts/HomePage/Components/Footer';
import { HomePage } from './layouts/HomePage/Homepage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch ,useHistory} from 'react-router-dom';
import { BookCheckoutPage } from './layouts/HomePage/Components/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import {OktaAuth,toRelativeUrl} from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';



const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customHandler = ()=>{
    history.push('/login')
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth:any,originalUri:any) => {
    history.replace(toRelativeUrl(originalUri || '/',window.location.origin));
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage />
          </Route>
          <Route path='/login' render={
            () => <LoginWidget config={oktaConfig}/>
          }
            />
            <Route path='/login/callback' component={LoginCallback}></Route>
        </Switch>
      </div>
      <Footer />
      </Security>
    </div>
  );
}
