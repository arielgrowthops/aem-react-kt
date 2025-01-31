import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { TodoProvider } from './pages/slide6/TodoContext.jsx';

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)