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
  CardText
} from 'reactstrap'

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`

const RecipeCard = props => {
  const history = useHistory()
   const routeToRecipe = (e, item) =>{
     e.preventDefault();
     history.push(`/recipes/${item.id}`)
   }
   return (
     <div>
       {props.recipesList.map(item => {
         return (
          <Card key={item.id}>
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
              <Button  onClick={ e => routeToRecipe(e, item)} key ={item.id} >View Recipe</Button>
            </CardBody>
          </Card>
     )
       })}
     </div>
   )
}

export default RecipeCard
