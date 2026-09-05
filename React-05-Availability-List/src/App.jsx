import Header from "./components/Header.jsx";
import AvailabilityList from "./components/AvailabilityList.jsx";
import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <div className="app-container">
        <Header />
        <AvailabilityList />
      </div>
    </main>
  );
}

export default App;