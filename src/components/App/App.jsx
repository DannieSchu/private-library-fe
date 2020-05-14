import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Bookshelf from '../Bookshelf/Bookshelf';
import BookForm from '../BookForm/BookForm';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shelf" component={Bookshelf} />
        <Route path="/form" component={BookForm} />
      </Switch>
    </Router>
  );
}
