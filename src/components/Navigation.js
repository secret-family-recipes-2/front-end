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
          <NavItem>
            <NavLink tag={Link} to='/recipes'>
              View Recipes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/addrecipe'>
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
        <Nav>
          <NavItem>
            <NavLink tag={Link} to='/login'>
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/registration'>
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  )
}

export default Navigation
