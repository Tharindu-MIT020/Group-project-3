import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropDown from "./Pages/ChartSelector";
import Chart from "./Pages/chart";

import Home from "./Pages/Home/home";
import Register from "./Pages/forme/Form";
import Login from "./Pages/login/login";
import Index from "./Pages/index";
import sendData from "./Pages/sensorReadingSendor";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/send" component={sendData} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
