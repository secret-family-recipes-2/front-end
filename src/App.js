import React from 'react'
import { Route } from 'react-router-dom'

import Registration from './components/user/Registration'

const App = () => {
  return (
    <div>
      <h1>Secret Family Recipes Cookbook</h1>
      <Route path='/registration' exact component={Registration} />
    </div>
  )
}

export default App
