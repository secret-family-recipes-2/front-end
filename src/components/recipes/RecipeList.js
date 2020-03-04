import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

import RecipeCard from './RecipeCard';

const RecipeList = () => {
 const recipesList =useSelector(state =>state.recipes)
  return (
    <Container>
      <Row>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard recipesList={recipesList}/>
        </Col>
      </Row>
    </Container>
  )
}

export default RecipeList
