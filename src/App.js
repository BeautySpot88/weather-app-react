import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="outside">
      <div className="App">
        <div className="container">
          <main>
            <Forecast defaultCity="Hanoi" />
          </main>
        </div>
      </div>
      <footer>Created by Ebele</footer>
    </div>
  );
}
