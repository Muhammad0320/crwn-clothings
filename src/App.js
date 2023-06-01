import "./App.css";
import HomePage from "./pages/homepage/homepage.components";

import ShopPage from "./pages/ShopPage/ShopPage.component";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
