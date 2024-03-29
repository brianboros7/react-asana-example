import React, {useState} from 'react'

import taskData from './taskData'
import TasksItem from './Tasks'

function TaskList() {
    const [tasks, setTasks] = useState(taskData) 

    function addTask() {
        setTasks(tasks => {
            // return task array with an extra object at the end
            return [
                ...tasks,
                {
                    id: Date.now(), 
                    text: "",
                    completed: false 
                } 
            ] 
        })
    }

    function removeTask(id) {
        setTasks(tasks =>  ( 
            tasks.filter(task => ( 
                task.id !== id
            ))
        ))
    }


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
                <TasksItem task={task} toggleCompleted={toggleCompleted} removeTask={removeTask} /> 
            ))}

            <button
                onClick={addTask}> 
                Add new task
            </button>
        </div>
    )
}

export default TaskList 