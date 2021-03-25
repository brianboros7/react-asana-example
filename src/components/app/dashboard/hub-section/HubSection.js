import React from 'react'
import TodaysTasks from './todays-tasks/TodaysTasks'
import RecentProjects from './recent-projects/RecentProjects'

function HubSection() {
    return(
        <div>
            <TodaysTasks />
            <RecentProjects /> 
        </div>
    )
}

export default HubSection 