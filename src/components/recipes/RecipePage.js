import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap'
import { useSelector } from 'react-redux';

const Title = styled.div`
  margin-bottom: 20px;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Btn = styled.button`
  margin-left: 20px;
`

const RecipePage = props => {
  console.log("props in recipe page", props)
  
  const recipesList =useSelector(state =>state.recipes)
  console.log("recipesList in recipe page", recipesList)
  
  const { id } = useParams();

  
 console.log("item in  recipe page", recipesList)
  return (
    <Container>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Card>
            <CardImg src='https://picsum.photos/1272/720' alt='title' />
            <CardBody>
              <Title>
             {/* <h2>title{item.title}</h2> */}
                <h4>By source</h4>
              </Title>
              {/* <p>Ingredients: {item.ingredients}</p> */}
              <p>Instructions: instructions</p>
              <BtnContainer>
                <Btn onClick ={() => props.history.push(`/editrecipe/${item.id}`)}>Edit Recipe</Btn>
                <Btn>Delete Recipe</Btn>
                <Btn>Return</Btn>
              </BtnContainer>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RecipePage
