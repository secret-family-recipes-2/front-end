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
} from 'reactstrap'

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`

const RecipeCard = props => {
  return (
    <Card>
      <CardImg
        top
        width='100%'
        src='https://picsum.photos/636/360'
        alt='Recipe'
      />
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardSubtitle>Source</CardSubtitle>
        <Badge color='dark' pill>
          Category
        </Badge>
      </CardBody>
      <CardBody>
        <Button>View Recipe</Button>
      </CardBody>
    </Card>
  )
}

export default RecipeCard
