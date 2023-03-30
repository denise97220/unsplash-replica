import styles from './Signup.module.scss'
import AuthForm from '../components/AuthForm'
import { redirect, useActionData } from 'react-router'
import { auth } from '../firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert'

const Signup = () => {
  const logo = new URL('../assets/unsplash_white.png', import.meta.url).href
  const cover = new URL('../assets/signup_cover.jpg', import.meta.url).href
  const data = useActionData()
  let message = ''

  if (data === 'passwords do not match.') {
    message = data
  } else if (data === 'Firebase: Error (auth/email-already-in-use).') {
    message = 'email already in use.'
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cover}>
          <img className={styles.cover__img} src={cover} alt='image' />
          <h1 className={styles.cover__title}>
            <Link to='/'>
              <img className={styles.logo} src={logo} alt='logo' />
            </Link>

            <span className={styles.primaryMain}>Creation starts here</span>
            <span className={styles.primarySub}>
              Access 4,896,865 free, high-resolution photos you can’t find anywhere else
            </span>
          </h1>
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.title}>
            <span className={styles.primaryMain}>Join Unsplash</span>
            <span className={styles.primarySub}>
              Already have an account? <Link to='/login'>Login</Link>
            </span>
            {data && (
              <Alert className={styles.alert} severity='error'>
                {message}
              </Alert>
            )}
          </h1>

          <AuthForm />
        </div>
      </div>
    </>
  )
}

export default Signup

export async function action({ request }) {
  const data = await request.formData()

  const email = data.get('email')
  const password = data.get('password')
  const passwordConfirmation = data.get('passwordConfirmation')

  if (password !== passwordConfirmation) {
    return 'passwords do not match.'
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return redirect('/')
  } catch (error) {
    return error.message
  }
}
