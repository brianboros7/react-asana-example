import React from 'react'
import TodaysTasksArrowIcon from '../../../../icons/TodaysTasksArrowIcon'

function TodaysTasks(props) {

    return(
        <div> 
            <p className="inline-block"><TodaysTasksArrowIcon /> <span>Today's Tasks</span></p>  
        </div>
    )
}

export default TodaysTasks 