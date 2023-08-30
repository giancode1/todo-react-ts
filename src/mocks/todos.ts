import { Todo } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export const mockTodos: Todo[] = [
    {
      id: uuidv4(),
      text: "Lavar la ropa",
      completed: false
    },
    {
      id: uuidv4(),
      text: "Leer un libro",
      completed: true
    },
    {
      id: uuidv4(),
      text: "Cocinar pollo con verduras",
      completed: false
    },
  ]