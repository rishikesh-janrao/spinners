import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SpinnerGrid from "./components/SpinnerGrid";
import Controls from "./components/Controls";
import UsageExample from "./components/UsageExample";

function App() {
  const [config, setConfig] = useState({
    size: 3,
    color: "#61dafb",
    speed: 1,
    borderWidth: 4,
    secondaryColor: "#ffffff",
    backgroundColor: "transparent",
  });

  const [selectedSpinner, setSelectedSpinner] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Spinner Library</h1>
        <p>50+ Beautiful Loading Spinners for React</p>

        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <div className="main-content">
          <div className="left-section">
            <SpinnerGrid 
              config={config} 
              onSelectSpinner={setSelectedSpinner}
              searchQuery={searchQuery}
            />
          </div>

          <div className="right-section">
            <div className="controls-usage-wrapper">
              <Controls config={config} setConfig={setConfig} />
              <UsageExample selectedSpinner={selectedSpinner} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
