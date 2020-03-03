import React from 'react'
import { renderWithReduxAndRouter as render } from '../utils/renderWithReduxAndRouter'
import Navigation from './Navigation'

describe('Navigation', () => {
  test('renders Navigation without crashing', () => {
    render(<Navigation />)
  })

  test('renders ui components', () => {
    const { getByText } = render(<Navigation />)

    getByText(/secret family recipes cookbook/i)
    getByText(/log in/i)
    getByText(/sign up/i)
  })
})
