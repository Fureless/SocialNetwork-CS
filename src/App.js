import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation'
import {Test} from './pages/Test'
import {Messages} from './pages/Messages'
import {Vacancies} from './pages/Vacancies'
import {Summary} from './pages/Summary'
import {Profile} from './pages/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <>
      <div className='supreme-container'>
        <Router>
          {/*<Auth/>*/}
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Test} />
            <Route path='/messages' component={Messages} />
            <Route path='/vacancies' component={Vacancies}/>
            <Route path='/summary' component={Summary}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </Router>
        </div>
    </>
  )
}

export default App;
