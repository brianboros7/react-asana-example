import React from 'react'

function AppSearchInput() {

    return(
        
            <form className="app-search-input"> 
                <label for="search mx-1 pt-1"> 
                    <input 
                        type="search"
                        placeholder="Seearch Here"
                        className="p-1">
                    </input>
                </label>
            </form>
    
    )
}

export default AppSearchInput