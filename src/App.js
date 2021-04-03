import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Weather-App">
        <div className="container">
          <main>
            <Forecast defaultCity="Hanoi" />
          </main>
        </div>
      </div>

      <footer>
        Created by Ebele and is{" "}
        <a
          href="https://github.com/BeautySpot88/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://agitated-pike-3fe7d3.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
