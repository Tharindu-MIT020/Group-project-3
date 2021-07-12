import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import DropDown from './Pages/DropDownlist';
import Chart from './Pages/chart';
import Online from './Pages/Onlinestatus';
import Header from './Pages/header';
import Home from './Pages/Home/home';
import Register from './Pages/forme/Form';
import Login from './Pages/login/login';

function App() {
  return (
    <>
        <Router>
        <Header />
           <Switch>
             <Route path='/details' component={Online , Chart , DropDown}/>
             <Route path='/register' component={Register}/>
             <Route path='/login' component={Login}/>
             <Route path='/' component={Home}/>
           </Switch>

    </Router>
    </>
  );
}

export default App;
