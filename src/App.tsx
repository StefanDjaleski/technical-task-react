import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './router/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
