import Home from './pages/Home'
import PhotoDetail from './pages/PhotoDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Login, { action as loginAction } from './pages/Login'
import Signup, { action as signupAction } from './pages/Signup'
import Author from './pages/Author'
import Collection from './pages/Collection'
import { Provider } from 'react-redux'
import store from './store/store'
import ProtectedRoute from './routers/ProtectedRoute'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'photo/:photoId', element: <PhotoDetail /> },
      { path: 'author/:authorName', element: <Author /> },
      {
        path: 'collection',
        element: (
          <ProtectedRoute>
            <Collection />
          </ProtectedRoute>
        )
      }
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
