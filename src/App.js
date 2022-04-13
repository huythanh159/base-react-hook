import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
//JSX
//function App() {
const App = () => {
  const thanh = <h1></h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Thanh
        </p>
        <TodoList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
