import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const RecipeCard = props => {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src='https://picsum.photos/318/180'
        alt='Recipe'
      />
      <CardBody>
        <CardTitle>Name</CardTitle>
        <CardSubtitle>Source</CardSubtitle>
        <CardText>Description</CardText>
        <Button>View Recipe</Button>
      </CardBody>
    </Card>
  )
}

export default RecipeCard
