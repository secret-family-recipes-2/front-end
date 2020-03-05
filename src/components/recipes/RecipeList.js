import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { SpinnerDiv, Spinner } from '../styled-components/spinner'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import RecipeCard from './RecipeCard'

const RecipeList = () => {
  const userId = Number(localStorage.getItem('userId'))
  const [allRecipes, setAllRecipes] = useState([])
  const [err, setErr] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  console.log(userId)

  useEffect(() => {
    axiosWithAuth()
      .get('https://secret-recipes-2.herokuapp.com/api/recipes/allRecipes')
      .then(res => {
        setAllRecipes(res.data.filter(recipe => recipe.user_id === userId))
        console.log(res)
        setIsFetching(false)
      })
      .catch(err => {
        setErr(err)
        setIsFetching(false)
      })
  }, [userId])

  const gotallRecipes = allRecipes.length !== 0 ? true : false
  const gotError = err.message !== undefined ? true : false

  console.log(gotallRecipes)

  if (isFetching)
    return (
      <SpinnerDiv>
        <Spinner color='success' />
      </SpinnerDiv>
    )
  else if (gotallRecipes)
    return (
      <Container style={{ margin: '50px auto' }}>
        <Row>
          {allRecipes.map(recipe => (
            <Col xs='12' sm='6' md='4' key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  else if (!gotallRecipes)
    return (
      <Container style={{ margin: '50px auto' }}>
        <Row>
          <Col xs='12' lg={{ size: 4, offset: 4 }}>
            <Card>
              <CardBody>
                No recipes yet? <Link to='/addrecipe'>Add one!</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  else if (gotError)
    return (
      <Card>
        <CardBody>{err.message}</CardBody>
      </Card>
    )
  else return <></>
}

export default RecipeList
