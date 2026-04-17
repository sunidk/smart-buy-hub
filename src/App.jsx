import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      <Products search={search} />
    </div>
  );
}

export default App;
