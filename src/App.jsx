import Home from './pages/Home'
import PhotoDetail from './pages/PhotoDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Login, { action as loginAction } from './pages/Login'
import Signup, { loader as signupLoader, action as signupAction } from './pages/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'photo/:photoId', element: <PhotoDetail /> }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/signup',
    element: <Signup />,
    loader: signupLoader,
    action: signupAction
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
