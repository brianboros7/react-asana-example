import React from 'react'
import TaskItem from '../../components/tasks/TaskCompleted' 
import AppHeader from '../../components/header/AppHeader'

function Dashboard() {
    return(
        <section>
            <AppHeader /> 


            <TaskItem /> 
        </section>
    )
}

export default Dashboard 