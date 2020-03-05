import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap'
import { useSelector } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

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
  const { id } = useParams()
  const userId = Number(localStorage.getItem('userId'))
  const [item, setItem] = useState({})
  const history = useHistory()

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${id}`)
      .then(res => {
        console.log('recipe page get response', res)
        setItem(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const routeToRecipeEdit = (e, item) => {
    e.preventDefault()
    history.push(`/editrecipe/${item.id}`)
  }
  if (!item || (item.user_id !== userId && item.user_id > 0))
    return (
      <div className='status'>Uh oh! You don't have access to this recipe!</div>
    )
  else
    return (
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Card>
              <CardImg src='https://picsum.photos/1272/720' alt='title' />
              <CardBody>
                <Title>
                  <h2>{item.title}</h2>
                  <h4>{item.source}</h4>
                </Title>
                <p>Ingredients: {item.ingredients}</p>
                <p>Instructions: {item.instructions}</p>
                <BtnContainer>
                  <Btn onClick={e => routeToRecipeEdit(e, item)} key={item.id}>
                    Edit Recipe
                  </Btn>
                  <Btn>Delete Recipe</Btn>
                  <Btn onClick={() => history.push('/recipes')}>Return</Btn>
                </BtnContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default RecipePage
