import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Main from './components/Main';
import Suspender from './components/Suspender';


import './App.css';

function App() {

  const Llogin = lazy(() =>  import('./components/Login') );

  return (
    <div className="App">

      <Suspense fallback={<span>Loading...</span>}>
        <Router>
        <Link to="/suspender">Cargar Profile</Link>
          <Switch>
          <Route exact path="/suspender" component={Suspender} />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Llogin} />
          </Switch>
        </Router>
      </Suspense>

    </div>

  );
}

export default App;
