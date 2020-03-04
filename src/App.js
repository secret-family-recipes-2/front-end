import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProtectedRoute from './utils/ProtectedRoute'

// components
import Navigation from './components/Navigation'
import AddNewRecipe from './components/recipes/AddRecipe'
import EditRecipe from './components/recipes/EditRecipe'
import RecipePage from './components/recipes/RecipePage'
import RecipeList from './components/recipes/RecipeList'
import RegistrationForm from './components/user/RegistrationForm'
import LoginForm from './components/user/LoginForm'

const App = () => {
  return (
    <div>
      <Navigation />

      {/* Switch just checks each path in order down the list */}
      <Switch>
        {/* Protected routes check for a token, and redirect to the login if there is none */}
        <ProtectedRoute path='/addrecipe' component={AddNewRecipe} />
        <ProtectedRoute path='/editrecipe' component={EditRecipe} />
        <ProtectedRoute path='/recipes/:id' component={RecipePage} />
        <ProtectedRoute path='/recipes' component={RecipeList} />
        <Route path='/registration' component={RegistrationForm} />
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
