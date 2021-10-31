import logo from './logo.svg';
import logoRust from './rust.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo App-react" alt="logo" />
        <img src={logoRust} className="App-logo App-rust" alt="logo" />
      </header>
      <div className="container">
        <p>
          Welcome to a Create-React-App served by a Rust-Actix web server.
        </p>
        <a
          className="App-link"
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Create-React-App
        </a>
        <a
          className="App-link"
          href="https://actix.rs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Rust and Actix
        </a>
      </div>
    </div>
  );
}

export default App;
