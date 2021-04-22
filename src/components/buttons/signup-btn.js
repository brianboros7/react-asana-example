import React from 'react'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router'

function SignUpBtn() {

    return(
        <div> 
            <Link to={ROUTE.SIGN_UP}>
                <Button 
                    variant="dark"
                    >
                    Sign Up
                </Button>
            </Link> 
        </div> 
    )
}

export default SignUpBtn 