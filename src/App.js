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
import Weather from './components/Weather/Weather';
import GenerateOTP from './components/OTP/GenerateOTP';
import OTP from './components/OTP/OTP';
import WeatherByLocation from './components/Weather/WeatherByLocation';
import MyTabs from './components/MyTabs/MyTabs';
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
        <Route path="/" exact={true}>
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
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/about">
          {/* <div>About</div> */}
          <MyTabs />
        </Route>
        <Route path="/Weather/Detail/:woeid">
          <WeatherByLocation />
        </Route>
        <Route path="*">
          <div>404 not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
