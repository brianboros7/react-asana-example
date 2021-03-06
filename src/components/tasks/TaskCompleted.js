import React, {useState} from 'react'
import TaskData from './TaskData'
import TaskItem from './TaskItem'

function TaskCompleted(props) {
    // eslint-disable-next-line
    const [task, setTask] = useState(TaskData)

    // eslint-disable-next-line
    const handleChange = ((id) => {
        // Update State so that the item with the given id flips 'completed' from false to true 
        // Remember not to modify prevState directly 
        // BUT instead, return a new version of state with the changes
        setTask((prevState) => {
            const updatedTask = prevState.task.map(task => {
                if (task.id === id) {
                    return {  
                        ...task,
                        completed: !task.completed 
                    }
                }
                return task 
            })

            return { 
                task: updatedTask
            }
        })
    })

    return(
        <div>{TaskItem}</div>
    )
}

export default TaskCompleted