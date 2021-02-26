import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function LogInBtn() {

    return(
        <Link to="/dashboard"> 
            <Button variant="light">Login</Button>
        </Link> 
    )
}

export default LogInBtn 