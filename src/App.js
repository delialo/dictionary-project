import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App text-center">
      <header className="App-header m-5">
        <h1>Dictionary App</h1>
      </header>
      <main className="container">
        <Dictionary />
      </main>
      <footer className="App-footer m-5">
        <small>
          Open sourced on{" "}
          <a
            href="https://github.com/delialo/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ld-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
