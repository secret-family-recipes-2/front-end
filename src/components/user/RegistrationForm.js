import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { withFormik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { SpinnerDiv, Spinner } from '../styled-components/spinner'

import { postRegister } from '../../store/actions'

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
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
          <FormContainer>
            <FormikForm
              style={{ width: '100%' }}
              onSubmit={() => handleSubmit(props.values)}
            >
              {props.touched.name && props.errors.name && (
                <p>{props.errors.name}</p>
              )}
              <label htmlFor='username-field'>Username</label>
              <Input
                type='text'
                name='username'
                id='username-field'
                placeholder='Username'
              />
              {props.touched.password && props.errors.password && (
                <p>{props.errors.password}</p>
              )}
              <label htmlFor='password-field'>Password</label>
              <Input
                type='password'
                name='password'
                id='password-field'
                placeholder='Password'
              />
              <button>Register</button>
            </FormikForm>
          </FormContainer>
          {props.isFetching && (
            <SpinnerDiv>
              <Spinner color='success' />
            </SpinnerDiv>
          )}
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
    username: Yup.string()
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
