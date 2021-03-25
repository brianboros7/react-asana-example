import React from 'react';
import './style.css'
// eslint-disable-next-line
import TaskCompleted from './TaskCompleted'

function TaskItem(props) {

    return(
        <div className="task-item-container">
            <div className="task-item">
                <input type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
                /> 
                <p>{props.item.text} </p>
            </div>
        </div> 
    )
}

export default TaskItem; 