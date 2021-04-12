import React from 'react'
import TodaysTasks from './TodaysTasks'

function TodaysTasksHeader() {

    return(

        <div className="HubSection-header d-flex justify-content-between pt-3 p-2 pl-2"> 
            <TodaysTasks className="HomeTasksForToday align-items-center px-2">
                
            </TodaysTasks>
                    
            <div className="d-flex justify-content-end p-1">
                <div className="align-items-center px-2">
                    <p>Icon</p>
                </div> 
                
                <div className="align-items-end pl-2">
                    <a>see all my tasks</a>
                </div>
            </div>
        
        </div>
    )
}

export default TodaysTasksHeader 