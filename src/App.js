import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation'
import {Test} from './pages/test'
import {Messages} from './pages/messages'
import {Vacancies} from './pages/vacancies'
import {Summary} from './pages/summary'
import {Company} from './pages/company'
import {Profile} from './pages/profile'

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
            <Route path='/company' component={Company}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </Router>
        </div>
    </>
  )
}

export default App;
