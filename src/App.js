import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">Coded by Beatriz Magro</footer>
      </div>
    </div>
  );
}
