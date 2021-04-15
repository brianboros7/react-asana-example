import React from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
// import HubList from '../app/dashboard/hub-section/recent-projects/HubList'
import Toggle  from '../toggle/Toggle'
import TodaysTasks from '../app/dashboard/hub-section/todays-tasks/TodaysTasks'

export default function TodaysTasksArrowIcon(props) {

    const toggleIcon = <Toggle render={
        (on, toggle) => (
           <>

                <button onClick={toggle}> 
                    <RiArrowRightSFill /> 
                </button>
                <div>
                    <span>
                        {on  ? <TodaysTasks />  : "Create your next task" } 
                    </span> 
                </div>
           </>

        )
    }/> 

    return(
        <div>
            {toggleIcon}
        </div>
        
           
    )     
}