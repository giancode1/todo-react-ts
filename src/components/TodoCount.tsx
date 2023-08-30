import { memo } from 'react'
import { useTodos } from '../hooks/useTodos'

export const TodoCount = memo(() => {
    // console.log("TodoCount")
    const { todos } = useTodos();

    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length
    const pendingTodos = totalTodos - completedTodos

    return (
        <p>
            Tareas: <span className="badge bg-info">{totalTodos}</span>  &nbsp;
            Completadas: <span className="badge bg-success">{completedTodos}</span>  &nbsp;
            Pendientes: <span className="badge bg-danger">{pendingTodos}</span> &nbsp;
        </p>
    )
})
