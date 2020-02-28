import React from 'react'
import { Route, Link } from 'react-router-dom'

import Registration from './components/user/Registration'
import LoginForm from './components/user/LoginForm'
import AddNewRecipe from './components/recipes/AddRecipe'

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
      <Route exact path='/add-recipe' component ={AddNewRecipe}/>
      
    </div>
  )
}

export default App
