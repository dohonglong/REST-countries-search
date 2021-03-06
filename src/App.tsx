import { Routes, Route } from "react-router-dom";
import "./App.css";

import CountryTable from "./components/table";
import CountryPage from "./components/country";
import Bookmarks from "./components/bookmarks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryTable />} />
        <Route path="/country/:name" element={<CountryPage />} />
        <Route path="/country/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}

export default App;
