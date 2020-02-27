import React, { useState } from 'react'

const RegistrationForm = (props) => {
    const {registerUser} = props
    const [chef, addChef] = useState({name: "", email: "", password: ""})

    const submitChef = newbie => {
        newbie.preventDefault()
        registerUser(chef)
        addChef({ name: "", email: "", password: "" })
    }
    
    const updateChef = update => 
        addChef({...chef, [update.target.name]: update.target.value})

    return(
        <>
            <br></br>
            <form onSubmit={submitChef}>
                <label>
                    Name:
                    <input type="text" name="name" value={chef.name} onChange={updateChef} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="text" name="email" value={chef.email} onChange={updateChef} />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type = "password" name = "password" value = {chef.password} onChange={updateChef} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default RegistrationForm