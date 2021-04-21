import React, {useState} from 'react'
import TaskData from './TaskData'
import TaskItem from './TaskItem'

function TaskCompleted(props) {
    // eslint-disable-next-line
    const [task, setTask] = useState([])


    return(
        <div>
            {task.map(item => (
                <>
                  <TaskItem handleChange={handleChange} text={item.text} id={item.id} complete={item.completed}/>
                </>
            ))}
        </div>
    
    )
}

export default TaskCompleted