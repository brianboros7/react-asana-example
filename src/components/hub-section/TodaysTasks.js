import React from 'react'
import TodaysTasksArrowIcon from '../icons/TodaysTasksArrowIcon'

function TodaysTasks() {

    return(
        <div className="d-flex justify-content-between"> 
            <div className="justify-content-start p-1">
                <p className="inline-block"><TodaysTasksArrowIcon /> <span>Today's Tasks</span></p> 
            </div>
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

export default TodaysTasks 