import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import ProtectedRoute from './utils/ProtectedRoute'

import Registration from './components/user/Registration'
import LoginForm from './components/user/LoginForm'
import AddNewRecipe from './components/recipes/AddRecipe'
import RecipeList from './components/recipes/RecipeList'

const App = () => {
  return (
    <div>
      <nav className='nav-links'>
        <h2>Secret Family Recipes Cookbook</h2>
        <div>
          <Link to='/login'>Log In</Link>
          <Link to='/registration'>Sign Up</Link>
        </div>
      </nav>

      {/* Switch just checks each path in order down the list */}
      <Switch>
        {/* Protected routes check for a token, and redirect to the login if there is none */}
        <ProtectedRoute path='/addrecipe' component={AddNewRecipe} />
        <ProtectedRoute path='/recipes' component={RecipeList} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={LoginForm} />

        {/* If user has a token, redirect to recipe list, else redirect to login */}
        <Route path='/'>
          {localStorage.getItem('token') ? (
            <Redirect to='/recipes' />
          ) : (
            <Redirect to='/login' />
          )}
        </Route>
      </Switch>
    </div>
  )
}

export default App
