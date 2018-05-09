import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import BatchesPage from './components/batches/BatchesPage'
import StudentsPage from './components/students/StudentsPage'
import EvaluationPage from './components/evaluations/EvaluationPage' 
import './App.css'
import TopBar from './components/layout/TopBar'

            

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/batches" component={BatchesPage} />
            <Route exact path="/batches/:id" component={StudentsPage} />
            <Route exact path="/students/:id" component={EvaluationPage} />
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App