import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Row,
  Col,
  Form as ReactForm,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const Form = styled(ReactForm)`
  margin-top: 150px;
  width: 100%;
`

const FormTemplate = props => {
  return (
    <Container>
      <Row>
        <Col xs='12' md={{ size: 6, offset: 3 }}>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for='username-field'>Username</Label>
              <Input
                type='text'
                name='username'
                id='username-field'
                placeholder='Username'
                value={props.username}
                onChange={props.handleChange && props.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='password-field'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password-field'
                placeholder='Password'
                value={props.password}
                onChange={props.handleChange && props.handleChange}
              />
              {props.touched.password && props.errors.password && (
                <p>{props.errors.password}</p>
              )}
            </FormGroup>
            <button>{props.formName}</button>
          </Form>
          {props.isFetching && <p>Loading...</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default FormTemplate
