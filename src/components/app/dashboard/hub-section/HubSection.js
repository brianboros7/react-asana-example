import React from 'react'
import TodaysTasksHeader from './todays-tasks/TodaysTasksHeader'
import RecentProjectsHeader from './recent-projects/RecentProjectsHeader'
// import TaskItem from '../../tasks/Tasks'
import TaskList from '../../tasks/TaskList'

function HubSection() {


    return(
        <div>
            <TodaysTasksHeader  />
            <RecentProjectsHeader /> 

            <TaskList />

        </div>
    )
}

export default HubSection 