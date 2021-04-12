import React from 'react'
import TodaysTasksHeader from './todays-tasks/TodaysTasksHeader'
import RecentProjectsHeader from './recent-projects/RecentProjectsHeader'
import TaskItem from '../../tasks/TaskItem'

function HubSection() {

    return(
        <div>
            <TodaysTasksHeader  />
            <RecentProjectsHeader /> 

            <TaskItem /> 
        </div>
    )
}

export default HubSection 