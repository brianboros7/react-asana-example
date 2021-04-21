import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'

function TasksItem({task, toggleCompleted, removeTask}) {

    function handleChange() {
        toggleCompleted(task.id) 
    }

   


    return(
        <div className="task-item">
             <button>
                <input 
                    type="checkbox" 
                    checked={task.completed}  
                    onChange={handleChange}
                /> 
            </button>
            <IoTrashOutline onClick={() => removeTask(task.id)}/> 

            <div classNam="task-item-cell">
                <label className="task-item-label">
                    <div className="task-item-box">
                        <textarea className="task-item-textarea">                
                            {task.text}
                        </textarea>
                    </div>
                </label>
            </div> 
        </div>
    )
}

export default TasksItem