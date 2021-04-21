import React from 'react'
import TodaysTasks from './TodaysTasks'
import RecentProjects from './RecentProjects'
// import TaskItem from '../tasks/Tasks'
import TaskList from '../tasks/TaskList'

function HubSection() {


    return(
        <div>
            <TodaysTasks  />
            <RecentProjects /> 

            <TaskList />

        </div>
    )
}

export default HubSection 