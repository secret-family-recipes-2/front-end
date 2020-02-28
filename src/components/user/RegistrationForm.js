import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { postRegister } from '../../store/actions'

const DisplayForm = props => {
  const history = useHistory()

  const handleSubmit = values => {
    props.postRegister(values)
    history.push('/recipes')
  }

  return (
    <div className='registration-form'>
      <Form onSubmit={() => handleSubmit(props.values)}>
        <div>
          {props.touched.name && props.errors.name && (
            <p>{props.errors.name}</p>
          )}
          <Field type='text' name='username' placeholder='Username' />
        </div>
        <div>
          {props.touched.password && props.errors.password && (
            <p>{props.errors.password}</p>
          )}
          <Field type='password' name='password' placeholder='Password' />
        </div>
        <div>
          <br></br>
          <input type='submit' value='Submit' />
        </div>
      </Form>
    </div>
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
