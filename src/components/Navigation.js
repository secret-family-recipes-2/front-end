import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = () => {
  const history = useHistory()
  const location = useLocation()

  const logout = e => {
    e.preventDefault()
    localStorage.clear()
    history.push('/login')
  }

  return (
    <Navbar style={{ backgroundColor: '#207561' }} dark>
      <NavbarBrand tag={Link} to='/' className='mr-auto'>
        Secret Family Recipes Cookbook
      </NavbarBrand>

      {/* display view recipes, add recipe, and log out if user has token, else display log in and sign up */}
      {localStorage.getItem('token') ? (
        <Nav className='nav-links'>
          <NavItem>
            <NavLink
              tag={Link}
              to='/recipes'
              className={location.pathname === '/recipes' ? 'active' : ''}
            >
              View Recipes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to='/addrecipe'
              className={location.pathname === '/addrecipe' ? 'active' : ''}
            >
              Add Recipe
            </NavLink>
          </NavItem>
          <NavItem onClick={logout}>
            <NavLink tag={Link} to='#'>
              Log Out
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className='nav-links'>
          <NavItem>
            <NavLink
              tag={Link}
              to='/login'
              className={location.pathname === '/login' ? 'active' : ''}
            >
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to='/registration'
              className={location.pathname === '/registration' ? 'active' : ''}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  )
}

export default Navigation
