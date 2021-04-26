import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const JeanPage = () => {
  <div>
    <h1>Jean Page</h1>
    <h1>Jean Page</h1>
    <h1>Jean Page</h1>
  </div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jean" component={JeanPage} />
      </Switch>
    </div>
  );
}

export default App;
