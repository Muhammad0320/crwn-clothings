import "./App.css";
import HomePage from "./pages/homepage/homepage.components";

import { Route, Routes } from "react-router-dom";

function Hat() {
  return <h1> HATS PAGE </h1>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/hat" Component={Hat} />
      </Routes>
    </div>
  );
}

export default App;
