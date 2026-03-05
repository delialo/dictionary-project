import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="container m-5">
        <Dictionary />
      </main>
      <footer className="text-center m-3">
        <small>Open sourced on GitHub and hosted on Netlify</small>
      </footer>
    </div>
  );
}

export default App;
