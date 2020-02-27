import React from 'react'
import styled from 'styled-components'

import {
  Card as ReactCard,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
} from 'reactstrap'

const Card = styled(ReactCard)`
  width: 318px;
  margin-bottom: 50px;
`

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
        <Badge color='dark' pill>
          Category 1
        </Badge>
        <Badge color='dark' pill>
          Category 2
        </Badge>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          lobortis elit. Integer vel urna sed libero vulputate ornare in ut
          odio.
        </CardText>
        <Button>View Recipe</Button>
      </CardBody>
    </Card>
  )
}

export default RecipeCard
