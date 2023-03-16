import { Form, useLocation } from 'react-router-dom'
import styles from './AuthForm.module.scss'

const AuthForm = () => {
  const location = useLocation()

  return (
    <>
      <Form method='post' className={styles.form}>
        <div className={styles.email}>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input className={styles.input} id='email' type='email' name='email' required />
        </div>
        <div className={styles.password}>
          <label className={styles.label} htmlFor='image'>
            Password
          </label>
          <input className={styles.input} id='password' type='password' name='password' required />
        </div>
        {location.pathname === '/signup' && (
          <div className={styles.password}>
            <label className={styles.label} htmlFor='image'>
              Password Confirmation
            </label>
            <input
              className={styles.input}
              id='passwordConfirmation'
              type='password'
              name='passwordConfirmation'
              required
            />
          </div>
        )}
        <div className={styles.button_container}>
          <button className={styles.button}>{location.pathname === '/login' ? 'Login' : 'Join'}</button>
        </div>
      </Form>
    </>
  )
}

export default AuthForm
