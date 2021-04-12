import React from 'react'
import RecentProjects from './RecentProjects'
// import withToggler from '../../../../toggle/Toggle'

function RecentProjectsHeader() { 

    return(
        <div>
            <div className="d-flex  justify-content-between">
                <RecentProjects className="align-items-start">

                </RecentProjects>
                <div className="align-items-center">
                    <p>Icon</p>
                </div>
            </div>
        </div>
    )
}

export default RecentProjectsHeader 