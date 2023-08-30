
import SwitcherTheme from './components/SwitcherTheme'
import { TodoForm } from './components/TodoForm';
import { TodoCount } from './components/TodoCount';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

import { TodoProvider } from './context/TodoProvider';


function App() {

  return (
    <>
      <div className="min-vh-100">
        <TodoProvider>
          <h1 className="mb-3 mt-2 ">ToDo App <SwitcherTheme /></h1>
          <TodoForm />
          <TodoCount />
          <TodoList />
        </TodoProvider >
      </div>
      <Footer />
    </>
  )
}

export default App
