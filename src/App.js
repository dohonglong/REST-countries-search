import { Routes, Route } from "react-router-dom";
import "./App.css";

import CountryTable from "./components/table";
import CountryPage from "./components/country";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryTable />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
