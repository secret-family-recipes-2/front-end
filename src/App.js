import React from 'react'
import { Route, Link } from 'react-router-dom'

import Registration from './components/user/Registration'
import LoginForm from './components/user/LoginForm'
import AddNewRecipe from './components/recipes/AddRecipe'
import EditRecipe from './components/recipes/EditRecipe'

const App = () => {
  return (
    <div>
      <nav className="nav-links">
        <h2>Secret Family Recipes Cookbook</h2>
        <div>
          <Link exact to= "/add-recipe">Add Recipe</Link>
          <Link exact to= "/edit-recipe">Edit Recipe</Link>
          <Link to="/login">LogIn</Link>
          <Link to="/registration">SignUp</Link>
        </div>
      </nav>
      <Route path='/registration' exact component={Registration} />
      <Route path='/login' component ={LoginForm} />
      <Route exact path='/add-recipe' component ={AddNewRecipe}/>
      <Route exact path='/edit-recipe' component ={EditRecipe}/>
    </div>
  )
}

export default App
