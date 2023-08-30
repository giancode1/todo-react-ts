import { memo } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces'

interface Props {
    todo: Todo
    index: number
}

export const TodoListItem = memo( ({ todo, index }: Props) => {

    const { dispatch, setInput, setEditTodo } = useTodos();

    const handleDeleteTodo = (id: string) => {
        // setTodos(todos.filter(todo => todo.id !== id))
        dispatch({ type:"DELETE_TODO", payload: id })
    }

    const handleEditTodo = (todo: Todo) => {
        setEditTodo(todo)
        setInput(todo.text)
    }

    const handleCompleted = (id: string) => {
        dispatch({ type:"TOGGLE_TODO", payload: id })
    }

    return (
        <tr key={todo.id}>
            <th>{index + 1}</th>
            <td className={todo.completed ? 'text-decoration-line-through' : ''}>{todo.text}</td>
            <td
                onClick={() => handleCompleted(todo.id)}
                style={{ cursor: 'pointer', color: todo.completed ? 'green' : 'red' }}
            >
                {todo.completed ? 'Completado' : 'Pendiente '}
            </td>
            <td>
                <span style={{ fontSize: "18px", color: "SteelBlue", cursor: 'pointer' }}>
                    <i onClick={() => handleEditTodo(todo)}
                        className="fas fa-pen fa-fw"></i>
                </span>

                <span style={{ fontSize: "18px", color: "DimGray", cursor: 'pointer' }}>
                    <i onClick={() => handleDeleteTodo(todo.id)}
                        className="fas fa-trash fa-fw"></i>
                </span>
            </td>
        </tr>
    )
})
