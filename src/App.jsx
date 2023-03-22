import Home from './pages/Home'
import PhotoDetail from './pages/PhotoDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Login, { action as loginAction } from './pages/Login'
import Signup, { loader as signupLoader, action as signupAction } from './pages/Signup'
import Author from './pages/Author'
import Collection from './pages/Collection'
import { Provider } from 'react-redux'
import store from './store/store'
// import { checkAuthLoader } from './utils/auth'
// import ProtectedRoute from './routers/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'photo/:photoId', element: <PhotoDetail /> },
      { path: 'author/:authorName', element: <Author /> },
      { path: 'collection', element: <Collection /> }
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
