import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todoText,setTodoText] = useState('')
    const {addTodo,todos} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        if (!todoText.trim()) {
            return;
        }
        addTodo({id: Date.now(),msg: todoText,completed: false})
        setTodoText('')
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoText}
                onChange={(e)=>setTodoText(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

