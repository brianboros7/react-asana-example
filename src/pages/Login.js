import React from 'react'

function Login() {

    return(
        <div>
            <h3>Let's log you in </h3>

            <form method="POST">
                <input 
                    aria-label="Enter your email"
                    placeholder="Email"
                    type="text" 
                    name="name" 
                />
                <input 
                    aria-label="Enter your password"
                    placeholder="Password"
                    type="text" 
                    name="name" 
                    onChange={({ target }) => setEmailAddress(target.value)}

                />
                <button 
                    disabled={isInValid}
                    type="submit" 
                    value="Submit"
                    >
                    Log In
                </button> 
            </form>
        </div>
    )
}

export default Login 