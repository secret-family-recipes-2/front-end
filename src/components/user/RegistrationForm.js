import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postRegister } from '../../store/actions'

const RegistrationForm = props => {
  const history = useHistory()
  const { registerUser } = props
  const [chef, addChef] = useState({ username: '', password: '' })

  const submitChef = async newbie => {
    newbie.preventDefault()
    await props.postRegister(chef)
    registerUser(chef)
    addChef({ name: '', email: '', password: '' })
    history.push('/recipes')
  }

  const updateChef = update =>
    addChef({ ...chef, [update.target.name]: update.target.value })

  return (
    <>
      <br></br>
      <form onSubmit={submitChef}>
        <label>
          Name:
          <input
            type='text'
            name='username'
            value={chef.username}
            onChange={updateChef}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={chef.password}
            onChange={updateChef}
          />
        </label>
        <br></br>
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { postRegister })(RegistrationForm)

// import React, { useState, useEffect } from 'react'
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import axios from 'axios'

// const DisplayForm = ({ values, errors, touched, status }) => {
//     const [userList, addUser] = useState([])

//     useEffect(() => status && addUser(userList => [...userList, status]), [status])

//     return (
//         <div className="registration-form">
//             <Form>
//                 <div>
//                     {touched.name && errors.name && (<p>{errors.name}</p>)}   
//                     <Field type="text" name="name" placeholder="Name" />
//                 </div>
//                 <div>
//                     {touched.email && errors.email && (<p>{errors.email}</p>)}
//                     <Field type="text" name="email" placeholder="Email" />
//                 </div>
//                 <div>
//                     {touched.password && errors.password && (<p>{errors.password}</p>)}    
//                     <Field type="password" name="password" placeholder="Passcode" />
//                 </div>
//                 <div>
//                     <br></br>
//                     <input type="submit" value="Submit" /> 
//                 </div>
//             </Form>   
//         </div>
//     )
// }

// const RegistrationForm = withFormik({
//     mapPropsToValues({ name, email, password }) {
//         return {
//             name: name || "",
//             email: email || "",
//             password: password || ""
//         }
//     },
//     validationSchema: Yup.object().shape({
//         name: Yup.string()
//             .min(2, "Name requires at least 2 characters")
//             .max(50, "Name cannot be more than 50 characters")
//             .required("You need a name"),
//         email: Yup.string()
//             .email("You need a real email")
//             .required("You need an email"),
//         password: Yup.string()
//             .min(6, "Passcode needs to be at lease 6 characters")
//             .required("You need a passcode")
//     }),
//     handleSubmit(values, { setStatus, resetForm }){
//         axios
//             .post("https://secret-recipes-2.herokuapp.com/api", values)
//             .then(responseHerokuapp => {
//                 console.log('response', responseHerokuapp.data)
//                 setStatus(responseHerokuapp.data)
//             })
//             .catch(errorHerokuapp => console.log(errorHerokuapp.response))
//             .finally(resetForm())
//     }
// })(DisplayForm)

// export default RegistrationForm