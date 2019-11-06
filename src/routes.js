import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Feed from './pages/Feed';
import NewPost from './pages/Post';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={NewPost} />
    </Switch>
  );
}

export default Routes;