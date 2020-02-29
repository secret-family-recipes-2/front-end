import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navigation = () => {
  const history = useHistory()

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <nav className='nav-links'>
      <h2>Secret Family Recipes Cookbook</h2>
      {localStorage.getItem('token') ? (
        <div>
          <Link to='/recipes'>View Recipes</Link>
          <Link to='/addrecipe'>Add Recipe</Link>
          <Link to='#' onClick={logout}>
            Log Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to='/login'>Log In</Link>
          <Link to='/registration'>Sign Up</Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation
