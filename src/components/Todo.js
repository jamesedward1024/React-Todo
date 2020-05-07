import React from 'react'

const Todo = props => {

        return (
            <div className="todo-Item">
                <p>{props.todo}</p>
            </div>
        )

}

export default Todo;