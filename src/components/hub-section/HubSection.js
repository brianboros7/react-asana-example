import React from 'react'
import TodaysTasks from './todays-tasks/TodaysTasks'
import RecentProjects from './recent-projects/RecentProjects' 

function HubSection() {

    return(
        <section>
            <div> 
                <TodaysTasks />
                <RecentProjects /> 
            </div>
        </section>
    )
}

export default HubSection 