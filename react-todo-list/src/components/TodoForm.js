import React, { useState } from "react"


function TodoForm({onSubmit}) {

    const [input, setInput] = useState('')

    const handleChangeTodo = (e) => {
        setInput(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault()
        onSubmit({
            id: Math.random() * 10,
            text: input,
            isComplete: false
        })
        setInput('')
    }

    return (
        <form className="todo-form" onSubmit={addTodo}>
            <input 
                className="todo-input" 
                name="todo" type="text" 
                placeholder="Add a Todo" 
                tabIndex={2}
                value={input} 
                onChange={handleChangeTodo} 
            />

            <button className="todo-btn" tabIndex={1} type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm