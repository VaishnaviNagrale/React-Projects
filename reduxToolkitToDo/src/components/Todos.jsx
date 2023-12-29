import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ul className="list-none w-full">
        {todos.map((todo) => (
          <li
            className="mt-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos