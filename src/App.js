import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import Test_Homepage from './Pages/Test_Homepage';
import DropDown from './Pages/DropDownlist';
import Chart from './Pages/chart';
import ChartsNavbBar from './Pages/chartNavBar';
import Online from './Pages/Onlinestatus';

function App() {
  return (
    <>
    <Router>
        <DropDown />
        <Online />

      <Switch>

          <Route path='/' component={Chart}/>
             
      </Switch>

    </Router>
    </>
  );
}

export default App;
