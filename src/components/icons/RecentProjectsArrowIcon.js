import React from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import HubList from '../app/dashboard/hub-section/recent-projects/HubList'
import { withToggler } from '../toggle/Toggle'

export default function RecentProjectsArrowIcon(props) {

    return(
        <button onClick={props.toggle}>
            <span>
                {props.on ? <HubList />  : <RiArrowRightSFill /> }
            </span> 
        </button>
    )     
}
console.log("button toggled")