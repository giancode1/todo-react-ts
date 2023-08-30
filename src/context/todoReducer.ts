import { Todo, TodoAction } from "../interfaces"


export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            //siempre regresar un nuevo state y no uno mutado
            return [
                ...state,
                action.payload
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
            );

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);

        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id 
                    ? { ...todo, text: action.payload.text, completed: action.payload.completed } 
                    : todo
            );

        default:
            return state;
    }
}