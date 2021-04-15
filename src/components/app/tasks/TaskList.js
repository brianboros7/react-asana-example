import React, {useState} from 'react'

import taskData from './taskData'
import TasksItem from './Tasks'

function TaskList() {
    const [tasks, setTasks] = useState(taskData) 

    function toggleCompleted(id) {
        setTasks(prevState => {
            const updatedTasks = prevState.map(task => {
                if (task.id === id) {
                    return {
                        ...task, 
                        completed: !task.completed  
                    }
                }
                return task
            })

            return updatedTasks
        })
    }

    return(
        <div>
            {tasks.map(task => (
                <TasksItem task={task} toggleCompleted={toggleCompleted} /> 
            ))}
        </div>
    )
}

export default TaskList 