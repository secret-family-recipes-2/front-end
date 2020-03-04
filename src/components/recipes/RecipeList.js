import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import RecipeCard from './RecipeCard'

const RecipeList = () => {
  const userId = Number(localStorage.getItem('userId'))
  const [allRecipes, setAllRecipes] = useState([])
  const [err, setErr] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  //console.log(userId)

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

  //console.log(gotallRecipes)

  if (isFetching) return <div>Loading...</div>
  else if (gotallRecipes)
    return (
      <Container>
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
      <div>
        No recipes yet? <Link to='/addrecipe'>Add one!</Link>
      </div>
    )
  else if (gotError) return <p>{err.message}</p>
  else return <></>
}

export default RecipeList
