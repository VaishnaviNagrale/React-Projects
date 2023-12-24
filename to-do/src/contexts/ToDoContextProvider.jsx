import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            msg: "To msg",
            completed: false,
        }
    ],
    addTodo: (msg)=>{},
    updateTodo: (id,msg)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider