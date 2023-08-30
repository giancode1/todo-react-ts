import {  memo } from 'react';
import { Todo } from '../interfaces'
import { v4 as uuidv4 } from 'uuid';
import { useTodos } from '../hooks/useTodos';

export const TodoForm = memo(() => {
    // console.log('Form me renderizo')
    const { dispatch, input, setInput, editTodo, setEditTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (input.trim() !== '') {
            if (editTodo) {
                dispatch({
                    type: 'EDIT_TODO',
                    payload: { id: editTodo.id, text: input, completed: editTodo.completed  },
                });
                setEditTodo(null);
            } else { //agrega todo
                const newTodo: Todo = {
                    id: uuidv4(),
                    text: input,
                    completed: false
                }
                dispatch({ 
                    type:"ADD_TODO", 
                    payload:newTodo
                })
                // setTodos([...todos, newTodo])
            }
            setInput('');
        } else {
            alert("Ingresa una tarea")
        }
    }

    return (

        <form onSubmit={handleSubmit} className="col-12 col-lg-7 mx-auto">
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ingresa tarea"
                    type="text"
                    value={input}
                    autoFocus
                />
                <button className="btn btn-primary" type="submit">{editTodo ? 'Actualizar' : 'Agregar'}</button>
            </div>
        </form>
    )
})

