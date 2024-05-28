import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <span>
              Anthony's React App
          </span>
        {/*<p>*/}
        {/*  Touch Edit <code>src/App.js</code> and save to reload. lol by Anthony!!!!!*/}
        {/*</p>*/}
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
