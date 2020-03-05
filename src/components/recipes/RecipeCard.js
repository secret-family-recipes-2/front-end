import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {
  Card as ReactCard,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  CardText,
} from 'reactstrap'
import cookbook from '../../img/cookbook.jpg'

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`

const RecipeCard = ({ recipe }) => {
  const history = useHistory()
  const routeToRecipe = e => {
    e.preventDefault()
    history.push(`/recipes/${recipe.id}`)
  }
  return (
    <Card>
      <CardImg top width='100%' src={cookbook} alt='Recipe' />
      <CardBody>
        <CardTitle>Title: {recipe.title}</CardTitle>
        <CardSubtitle>Source: {recipe.source}</CardSubtitle>
        <Badge color='dark' pill>
          Category: {recipe.category}
        </Badge>
        <CardText>Instructions: {recipe.instructions}</CardText>
      </CardBody>
      <CardBody>
        <Button onClick={routeToRecipe}>View Recipe</Button>
      </CardBody>
    </Card>
  )
}

export default RecipeCard
