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
      <footer>
        Created by Ebele and is{" "}
        <a href="https://github.com/BeautySpot88/weather-app-react">
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://github.com/BeautySpot88/weather-app-react">Netlify</a>
      </footer>
    </div>
  );
}
