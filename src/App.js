import logo from './logo.svg';
import TodoList from './components/TodoList';
import Home from './components/Home';
import AddnewProduct from './components/AddnewProduct';
import AddStudent from './components/AddStudent';
import Product from './components/Products/Product';
import './App.scss';
import 'react-image-lightbox/style.css';

//JSX
//function App() {
const App = () => {



  return (
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
  );
}

export default App;
