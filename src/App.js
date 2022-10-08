import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {
  return (
    <div className='grocery-app'>
      <ItemList />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">ItemList</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );

}
export default App;
