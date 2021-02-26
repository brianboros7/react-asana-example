import React from 'react'
import AppSearchInput from '../search/AppSearchInput'
import UpgradeBtn from '../buttons/UpgradeBtn'
import './style.css'

function AppHeader() {

    return(
        <section className="app-header p-4">
            <div className="d-flex flex-row justiy-content-between">

                <h1 className="p-3">Dashboard Home</h1>

                <div className="app-header-btns d-flex justify-content-end p-3 w-200"> 
                    <AppSearchInput /> 
                    <UpgradeBtn /> 
                </div>
            </div>
        </section>
    )
}

export default AppHeader