import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import WorkoutBuilder from './containers/WorkoutBuilder/WorkoutBuilder';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import AuthBuilder from './containers/AuthBuilder/AuthBuilder';

function App(props) {
  let routes = (
    <Switch>
      <Route path="/workout" component={WorkoutBuilder}></Route>
      <Route path="/recipe" component={RecipeBuilder}></Route>
      <Route path="/food" component={FoodBuilder}></Route>
      <Route path="/auth" component={AuthBuilder}></Route>
    </Switch>
  )

  if(props.isLogged) {
    routes = (
      <Switch>
        <Route path="/workout" component={WorkoutBuilder}></Route>
        <Route path="/recipe" component={RecipeBuilder}></Route>
        <Route path="/food" component={FoodBuilder}></Route>
      </Switch>
    );
  } 
  return (
    <div className="App">
      {/* <WorkoutBuilder></WorkoutBuilder>
      <Layout>
        <RecipeBuilder></RecipeBuilder>
      </Layout> */}
      <Layout {...props}>
        {routes}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      isLogged: state.auth.token !== null,
  };
};

export default withRouter(connect(mapStateToProps)(App));
