import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import CountryTable from "./components/table";
import CountryPage from "./components/country";
import Favorites from "./components/favorites";

function App() {
  return (
    <div className="App">
      <Link to="/country/favorites">Favorites</Link>
      <Routes>
        <Route path="/" element={<CountryTable />} />
        <Route path="/country/:name" element={<CountryPage />} />
        <Route path="/country/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
