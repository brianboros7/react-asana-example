import React from 'react'

function SignUp() {

    return(
        <div>
            <h1>Let's sign you up</h1>

            <form method="POST">
                <input 
                    aria-label="Enter your first name"
                    placebolder="First Name"
                    type="text" 
                    name="name" 
                />
                <input 
                    aria-label="Enter your last name"
                    placeholder="Last Name"
                    type="text" 
                    name="name" 
                />
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
                    Sign Up 
                </button> 
            </form>
        </div>
    )
}

export default SignUp  