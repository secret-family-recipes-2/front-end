import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import RecipeCard from './RecipeCard'

const RecipeList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <RecipeCard />
        </Col>
        <Col>
          <RecipeCard />
        </Col>
        <Col>
          <RecipeCard />
        </Col>
        <Col>
          <RecipeCard />
        </Col>
        <Col>
          <RecipeCard />
        </Col>
      </Row>
    </Container>
  )
}

export default RecipeList
