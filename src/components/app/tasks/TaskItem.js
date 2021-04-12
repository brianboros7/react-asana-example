import React from 'react';
import './style.css'
// eslint-disable-next-line
import TaskCompleted from './TaskCompleted'

function TaskItem(props) {
    // Set an array that will hold the todo list items
    let todoItems = [];

    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array
    function addTodo(text) {
        const todo = {
          text,
          checked: false,
          id: Date.now(),
        };
      
        todoItems.push(todo);
        console.log(todoItems);
      }
    }

    return(
        <div className="task-item-container">
            <div className="task-item">
                <button>
                    <input type="checkbox" 
                        checked={props.item.completed} 
                        onChange={() => props.handleChange(props.item.id)}
                    /> 
                </button>
                <p>{props.item.text}</p>

            </div>
        </div> 
    )
}

export default TaskItem; 