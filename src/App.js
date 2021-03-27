import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Forecast defaultCity="Hanoi" />
        </main>

        <footer>Created by Ebele</footer>
      </div>
    </div>
  );
}
