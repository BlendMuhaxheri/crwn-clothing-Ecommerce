import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
// import MenuItem from "./components/menu-item/menu-item.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
