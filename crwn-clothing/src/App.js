import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/homepage.component';
import './App.css';

const TopicsList = () => (
  <div>
    <h1>Topic List Page</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/topics" component={TopicsList}></Route>
        <Route path="/topics/:topicId" component={TopicDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
