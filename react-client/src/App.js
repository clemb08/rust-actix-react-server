import logo from './logo.svg';
import logoRust from './rust.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign: "center", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  webkitFontSmoothing: "antialiased",
  mozOsxFontSmoothing: "grayscale"}}>
      <header className="container" style={{minHeight: "70vh", flexDirection: "row", justifyContent: "center"}}>"
        <img src={logo} className="App-logo App-react" alt="logo" style={{animation: "App-logo-spin infinite 20s linear"}}/>
        <img src={logoRust} className="App-logo App-rust" alt="logo" style={{animation: "App-rust-spin infinite 20s linear"}}/>
      </header>
      <div className="container" style={{minHeight: "30vh", flexDirection: "column", justifyContent: "start", fontSize: "calc(10px + 2vmin)", color: "white"}}>
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
