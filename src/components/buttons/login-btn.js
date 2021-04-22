import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function LogInBtn() {

    return(
        <div> 
            <Link to={ROUTES.DASHBOARD}> 
                <Button 
                    variant="light">
                    Login
                </Button>
            </Link> 
        </div> 
    )
}

export default LogInBtn 