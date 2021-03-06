import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51HQey7Bo7f429iWDXscjEg4DMqY46vkq3deWx1bCK5zo8S0WKD14ukt6gsu4Oqhg65Gm6jcqok7NrF7hplXQcjnU00ETRYj0NV"
);

function App() {
  const [{}, dispatch] = useStateValue();
  // Piece of code which runs based on a given condition
 
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS>>>> ", authUser);
      
      if (authUser) {
        // the user is logged in...
        
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
      });
    }
  });
  }, []);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
