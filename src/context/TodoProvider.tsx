import { TodoContext } from "./TodoContext"

import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { mockTodos } from '../mocks/todos';
import { FilterType, Todo } from "../interfaces";
import useLocalStorage from "../hooks/useLocalStorage";


interface props {
    children: JSX.Element | JSX.Element[];
}


export const TodoProvider = ({ children }: props) => {

    // const [todos, dispatch] = useReducer(todoReducer,  mockTodos ); //solo esta linea si no estuviera useLocalStorage

    const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>("todos", mockTodos);
    const [todos, dispatch] = useReducer(todoReducer,  storedTodos );


    const [input, setInput] = useState<string>('')
    const [editTodo, setEditTodo] = useState<Todo | null>(null);
    const [filter, setFilter] = useState<FilterType>('all');


    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    return (
        <TodoContext.Provider value={{
            todos,
            dispatch,
            input,
            setInput,
            editTodo,
            setEditTodo,
            filter,
            setFilter
        }}>
            {children}
        </TodoContext.Provider>
    )
}
