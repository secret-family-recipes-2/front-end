import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { withFormik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
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

import { postRegister } from '../../store/actions'

const Form = styled(ReactForm)`
  margin-top: 150px;
  width: 100%;
`

const DisplayForm = props => {
  const history = useHistory()

  const handleSubmit = values => {
    props.postRegister(values)
    history.push('/recipes')
  }

  return (
    <Container>
      <Row>
        <Col xs='12' md={{ size: 6, offset: 3 }}>
          <FormikForm onSubmit={() => handleSubmit(props.values)}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                {props.touched.name && props.errors.name && (
                  <p>{props.errors.name}</p>
                )}
                <Label for='username-field'>Username</Label>
                <Field
                  type='text'
                  name='username'
                  id='username-field'
                  placeholder='Username'
                />
              </FormGroup>
              <FormGroup>
                {props.touched.password && props.errors.password && (
                  <p>{props.errors.password}</p>
                )}
                <Label for='password-field'>Password</Label>
                <Field
                  type='password'
                  name='password'
                  id='password-field'
                  placeholder='Password'
                />
              </FormGroup>
              <button>Log In</button>
            </Form>
          </FormikForm>
          {props.isFetching && <p>Loading...</p>}
        </Col>
      </Row>
    </Container>
  )
}

const RegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Username requires at least 2 characters')
      .max(50, 'Username cannot be more than 50 characters')
      .required('You need a username'),
    password: Yup.string()
      .min(4, 'Password needs to be at least 4 characters')
      .required('You need a password'),
  }),
})(DisplayForm)

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { postRegister })(RegistrationForm)
