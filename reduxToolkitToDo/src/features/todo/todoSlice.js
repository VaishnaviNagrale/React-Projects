import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1,text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            const {id,newText} = action.payload
            state.todos = state.todos.map((todo)=>{
                if (todo.id === id) {
                    return{ ...todo, text: newText}
                } else {
                    return todo
                }
            })
        } 
    }
})

export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer