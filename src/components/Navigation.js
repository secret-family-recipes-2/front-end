import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = () => {
  const history = useHistory()

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <Navbar color='faded' light className='nav-links'>
      <Link to='/'>
        <NavbarBrand className='mr-auto'>
          Secret Family Recipes Cookbook
        </NavbarBrand>
      </Link>

      {/* display view recipes, add recipe, and log out if user has token, else display log in and sign up */}
      {localStorage.getItem('token') ? (
        <Nav>
          <Link to='/recipes'>
            <NavItem>
              <NavLink>View Recipes</NavLink>
            </NavItem>
          </Link>
          <Link to='/addrecipe'>
            <NavItem>
              <NavLink>Add Recipe</NavLink>
            </NavItem>
          </Link>
          <NavItem onClick={logout}>
            <NavLink>Log Out</NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav>
          <Link to='/login'>
            <NavItem>
              <NavLink>Log In</NavLink>
            </NavItem>
          </Link>
          <Link to='/registration'>
            <NavItem>
              <NavLink>Sign Up</NavLink>
            </NavItem>
          </Link>
        </Nav>
      )}
    </Navbar>
  )
}

export default Navigation
