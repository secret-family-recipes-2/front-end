import React from 'react'
import styled from 'styled-components'

import {
  Card as ReactCard,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  CardText
} from 'reactstrap'

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`

const RecipeCard = props => {
  return (
    <div>
      {props.recipe.map( item => {
      return (
        <Card>
          <CardImg
            top
            width='100%'
            src='https://picsum.photos/636/360'
            alt='Recipe'
          />
          <CardBody>
            <CardTitle>Title: {item.title}</CardTitle>
            <CardSubtitle>Source: {item.source}</CardSubtitle>
              <Badge color='dark' pill>
                Category: {item.category}
              </Badge>
            <CardText>Instructions: {item.instructions}</CardText>
             </CardBody>
          <CardBody>
            <Button>View Recipe</Button>
          </CardBody>
        </Card>
      )
    })}
    </div>
  )
}

export default RecipeCard
