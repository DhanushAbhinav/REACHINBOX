import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Onebox from './components/Onebox'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/onebox" component={Onebox} />
        <Route path="/" exact component={Login} />
      </Switch>
      </Router>
  )
}

export default App
