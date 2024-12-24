import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="spinner-1">
          <span></span>
        </div>
        <div className="spinner-2">
          <div></div>
          <div className="spinner-2-inner"></div>
          <div></div>
        </div>

        <div className="spinner-3">
          <div className="inner-block"></div>
          <div className="inner-block"></div>
          <div className="spinner-3-inner"></div>
          <div className="inner-block"></div>
          <div className="inner-block"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
