export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type TodoAction =
    | { type: 'ADD_TODO'; payload: Todo }
    | { type: 'TOGGLE_TODO'; payload: string }
    | { type: 'DELETE_TODO'; payload: string }
    | { type: 'EDIT_TODO'; payload: { id: string; text: string, completed: boolean } };

export type FilterType = 'all' | 'pending' | 'completed';

export interface TodoContextType {
    todos: Todo[];
    dispatch: React.Dispatch<TodoAction>;

    // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    // setTodos: React.Dispatch<React.SetStateAction<Todo[]>> | ((value: Todo[] | ((val: Todo[]) => Todo[])) => void);
    
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;

    editTodo: Todo | null;
    setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
    
    filter: FilterType;
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
} 
