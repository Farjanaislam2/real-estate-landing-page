import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Routes/Routes';

function App() {
  return (
    <div className="bg-blue-200 ml-10 mr-10">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
