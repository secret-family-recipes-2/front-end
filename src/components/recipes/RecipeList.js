import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

import RecipeCard from './RecipeCard';

const RecipeList = () => {
//  const recipesList =useSelector(state =>state.recipes)
const [allRecipes, setAllRecipes] = useState([])
const [err, setErr] = useState([])

useEffect (() => {
  axiosWithAuth()
        .get("https://secret-recipes-2.herokuapp.com/api/recipes/allRecipes")
        .then(res => {
          setAllRecipes(res.data)
          console.log('allRecipes', res)
        })
        .catch(err => setErr(err))
}, [])

const gotallRecipes = (allRecipes.length !== 0 ) ? true : false
const gotError = (err.message !== undefined) ? true : false

if (gotallRecipes) return (
  <Container>
  <Row>
    <Col xs='12' sm='6' md='4'>
      <RecipeCard recipesList={allRecipes}/>
    </Col>
  </Row>
  </Container>
)
else if (gotError) return <p>{err.message}</p>
else return <></>
}

export default RecipeList