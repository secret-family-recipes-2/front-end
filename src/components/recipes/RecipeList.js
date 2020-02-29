import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import RecipeCard from './RecipeCard'

const RecipeList = () => {
  return (
    <Container>
      <Row>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard />
        </Col>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard />
        </Col>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard />
        </Col>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard />
        </Col>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipeList
