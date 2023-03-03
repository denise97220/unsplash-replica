import { Link } from 'react-router-dom'
import AuthForm from '../components/AuthForm'
import styles from './Login.module.scss'

const Login = () => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href

  return (
    <>
      <div className={styles.container}>
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
      </div>
    </>
  )
}

export default Login
