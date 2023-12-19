import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch,   Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import FormGeneric from './components/FormGeneric';
import Search from './components/Search';
import TripLables from './assets/TripLables';
import {HandleAddTrip} from './components/HandlersFile';
import AddTrip from './components/AddTrip';
import './components/Styles.css';


function App() {
  return (
     <Router>
      <Navbar/>
      <Switch>
        <Route exact path= "/"><MainPage/></Route>
        <Route path='/Add trip' >
          <div className='pageWraper'>
                    <AddTrip></AddTrip>

          </div>
        </Route>
        <Route path='/Search'> 
          <div className='pageWraper'>
            <Search></Search>
          </div>
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;
