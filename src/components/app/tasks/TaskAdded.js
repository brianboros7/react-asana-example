import React from 'react'

function TaskAdded(task) {

    function addTask(id) {
        setTask(task => {
            if (task.id === task) {
                task.push([]) 
            }
        })
    }

    return(
        <div>
            {addTask}
        </div>
    )
}

export default TaskAdded 