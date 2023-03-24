import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, redirect, useActionData } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import styles from './Login.module.scss'
import { auth } from '../firebase.config'
import Alert from '@mui/material/Alert'
const errorMessage = [
  'Firebase: Error (auth/wrong-password).',
  'Firebase: Error (auth/user-not-found).',
  'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
]

const Login = () => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href
  const data = useActionData()
  let message
  console.log(data)

  if (data === errorMessage[0] || data === errorMessage[1]) {
    message = 'Invalid email or password.'
  } else if (data === errorMessage[2]) {
    message = 'Please try again later.'
  }

  return (
    <>
      <div className={styles.container}>
        {data && (
          <Alert className={styles.alert} severity='error'>
            {message}
          </Alert>
        )}
        <div className={styles.logo}>
          <Link to='/'>
            <img className={styles.logo_img} src={logo} alt='logo' />
          </Link>
          <h1 className={styles.title}>
            <span className={styles.primaryMain}>Login</span>
            <span className={styles.primarySub}>Welcome back.</span>
          </h1>
        </div>
        <AuthForm />
        <span className={styles.signup_link}>
          Don’t have an account? <Link to='/signup'>Join Unsplash</Link>
        </span>
      </div>
    </>
  )
}

export default Login

export async function action({ request }) {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    return redirect('/')
  } catch (error) {
    return error.message
  }
}
