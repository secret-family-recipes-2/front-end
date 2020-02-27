 
import React from 'react'

const UserList = (props) => {
    const {user} = props

    const displayChef = user.map((chef, index) => {
        return (
            <div key={index}>
                <p>{chef.name} {chef.email} {chef.passowrd}</p>
            </div>
        )
    })

    return (
        <>
            <h3>List of chefs</h3>
            <p>Name - Email - Password</p>
            {displayChef}
        </>
    )
}

export default UserList