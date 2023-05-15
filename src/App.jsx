 
 import {createBrowserRouter, RouterProvider} from 'react-router-dom'
 import Comentarios from './components/Comentarios'
 import Usuarios from './components/Usuarios'
 import Tareas from './components/Tareas'
 import Posts from './components/Posts'
 import Imagenes from './components/Imagenes'
 import Albums from './components/Albums'
 const router = createBrowserRouter([
  
  {
    path:'/Comentarios',
    element:<Comentarios/>,
  },
  {
    path:'/Usuarios',
    element:<Usuarios/>,
  },
  {
    path:'/Tareas',
    element:<Tareas/>,
  },
  {
    path:'/Posts',
    element:<Posts/>,
  },
  {
    path:'/Imagenes',
    element:<Imagenes/>,
  },
  {
    path:'/Albums',
    element:<Albums/>,
  },
  
 ])
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>    
    </>
  )
}

export default App
