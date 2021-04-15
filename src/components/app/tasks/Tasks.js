import React from 'react'

function TasksItem({task, toggleCompleted}) {

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