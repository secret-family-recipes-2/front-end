import React from 'react'
import { Route, Link } from 'react-router-dom'

import Registration from './components/user/Registration'
import LoginForm from './components/user/LoginForm'

const App = () => {
  return (
    <div>
      <nav className="nav-links">
      <h2>Secret Family Recipes Cookbook</h2>
      <div>
      
      <Link to="/login">LogIn</Link>
      <Link to="/registration">SignUp</Link>
      </div>
      </nav>
      
      <Route path='/registration' exact component={Registration} />
      <Route path='/login' component ={LoginForm} />
    </div>
  )
}

export default App
