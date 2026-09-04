import "./App.css";
import Header from "./components/header.jsx";
import FoundItemForm from "./components/founditemform.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <div className="badge">● PRIVACY-FIRST LOST & FOUND</div>

          <h1>
            Help lost items
            <span> find their way home.</span>
          </h1>

          <p>
            Report something you've found without exposing anyone's
            private information.
          </p>
        </section>

        <FoundItemForm />
      </main>

      <footer>
        <p>ReturnRescue • Built for safer returns.</p>
      </footer>
    </div>
  );
}

export default App;