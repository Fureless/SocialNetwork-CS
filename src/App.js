import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth from './Components/Auth'
import Navigation from './Components/Navigation'
import {test} from './pages/test'
import {messages} from './pages/messages'
import {vacancies} from './pages/vacancies'
import {summaries} from './pages/summaries'
import {company} from './pages/company'
import {profile} from './pages/profile'

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
            <Route exact path='/' component={test} />
            <Route path='/messages' component={messages} />
            <Route path='/vacancies' component={vacancies}/>
            <Route path='/summaries' component={summaries}/>
            <Route path='/company' component={company}/>
            <Route path='/profile' component={profile}/>
          </Switch>
        </Router>
        </div>
    </>
  )
}

export default App;
