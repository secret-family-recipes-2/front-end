import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'

import RecipeCard from './RecipeCard'

const RecipeList = () => {
  const [recipe, setRecipe] = useState([
    {
      title:"Tacos",
      source:"Grandma",
      category:"Diner",
      instructions:"Make it good",
      id:1
    },
    {
      title:"Lasagna",
      source:"Mom",
      category:"Diner",
      instructions:"Make it good",
      id:2
    },
    {
      title:"Tiramisu",
      source:"Cook book",
      category:"Dessert",
      instructions:"Make it good",
      id:3
    }, 
    {
      title:"Wafles",
      source:"Grandma",
      category:"Breackfast",
      instructions:"Make it sweet", 
      id:4
    }
  ])
  return (
    <Container>
      <Row>
        <Col xs='12' sm='6' md='4'>
          <RecipeCard recipe={recipe}/>
        </Col>
  
      </Row>
    </Container>
  )
}

export default RecipeList
