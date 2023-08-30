import { memo } from 'react';
import { TodoListItem } from './TodoListItem'
import { TodoFilter } from './TodoFilter'
import { useTodos } from '../hooks/useTodos';

export const TodoList = memo(() => {

  const { todos, filter } = useTodos();

  return (
    <div className="card col-12 col-lg-7 mx-auto mb-4">
      <div className="table-responsive">
        <table className="table align-middle table-hover">
          <thead className='table-dark'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tarea</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              todos
                .filter(todo => {
                  if (filter === 'pending') {
                    return !todo.completed;
                  } else if (filter === 'completed') {
                    return todo.completed;
                  }
                  return true; // filter === 'all'
                })
                .map((todo, index) => (
                    <TodoListItem
                      key={todo.id}
                      todo={todo}
                      index={index}
                    />
                ))
            }
          </tbody>
        </table>
      </div>
      {
        todos.length > 1 && (
          <div className='card-text'>
            <TodoFilter />
          </div>
        )
      }
    </div>
  )
})
