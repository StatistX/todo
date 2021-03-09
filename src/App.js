import React from 'react';
import TodoApp from './TodoApp/TodoApp';
import StarWarsDB from './StarWarsDB/StarWarsDB';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Links from './Links/Links';
import Other from './other/other';

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <Route path='/' exact component={Links} />

        <Route path='/other' component={Other} />

        <Route path='/starwarsdb' component={StarWarsDB} />

        <Route path='/todoapp' component={TodoApp} />

      </div>
    </Router>
  )
};

export default App;