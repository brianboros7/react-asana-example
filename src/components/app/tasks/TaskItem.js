import React, {useState} from 'react';
import taskData from './taskData'

function TaskItem(props) {
    const [task, setTask] = useState(false)

    // Set an array that will hold the todo list items
    let taskItem = []
    taskItem = taskData.map(item => {
        return(
            <div key={item.id}>
                <button>
                    <input 
                        type="checkbox" 
                        checked={props.item.completed} 
                        onChange={() => handleChange(item.id)}
                    /> 
                </button>
                <div>
                    <p>{item.text}</p>
                </div>  
            </div>
        )
    })

  

    // eslint-disable-next-line
    const handleChange = ((id) => {
    // Update the task State so that the TaskItem with the given ID marked 'completed' == boolean from false to true 
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

            setTask(updatedTask) 
        })
        addTask(task)
    })

    return(
        <div className="task-item-container">
            {taskItem}          
        </div> 
    )
}

export default TaskItem; 