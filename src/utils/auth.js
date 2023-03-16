import { redirect } from 'react-router'
import useAuth from '../custom-hooks/useAuth'

export function checkAuthLoader() {
  const user = useAuth()

  if (!user) {
    return redirect('/login')
  }
}
