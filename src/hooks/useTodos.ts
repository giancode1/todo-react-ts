import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodos = () => {
    
    const {todos, dispatch, editTodo, setEditTodo,input,setInput, filter, setFilter } = useContext(TodoContext)

    return {
        todos, dispatch, editTodo, setEditTodo,input,setInput, filter, setFilter
    }
}
