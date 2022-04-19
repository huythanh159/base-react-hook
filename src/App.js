import logo from './logo.svg';
import TodoList from './components/TodoList';
import Home from './components/Home';
import AddnewProduct from './components/AddnewProduct';
import AddStudent from './components/AddStudent';
import Product from './components/Products/Product';
import './App.scss';
import 'react-image-lightbox/style.css';
import React from "react";
import Nav from './components/Navigation/Nav';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//JSX
//function App() {
const App = () => {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <Product />
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}><img src={logo} className="App-logo" alt="logo" /></div>
              {/* <TodoList /> */}
              <Home />
            </header>
            <div className='content-right'>
              <AddnewProduct />
              <hr />
              <Product />
              {/* <AddStudent /> */}

            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
