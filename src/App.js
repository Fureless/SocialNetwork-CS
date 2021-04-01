import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation'
import {test} from './pages/test'
import {messages} from './pages/messages'
import {vacancies} from './pages/vacancies'
import {summaries} from './pages/summaries'
import {company} from './pages/company'
import {profile} from './pages/profile'
import {signUp} from './pages/signUp'
import {notFound} from './pages/notFound'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className='blur-container'>
      <Router>
        <Navigation/>
        <Switch>
          <div className='wrapper'>
            <Route exact path='/' component={test}/>
            <Route exact path='/messages' component={messages}/>
            <Route exact path='/vacancies' component={vacancies}/>
            <Route exact path='/summaries' component={summaries}/>
            <Route exact path='/company' component={company}/>
            <Route exact path='/profile' component={profile}/>
            <Route exact path='/sign-up' component={signUp}/>

            {/*<Route path='' component={notFound}/>*/}
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
