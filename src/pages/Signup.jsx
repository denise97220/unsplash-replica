import styles from './Signup.module.scss'
import AuthForm from '../components/AuthForm'
import { redirect, useLoaderData } from 'react-router'
import { auth } from '../firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href
  const photo = useLoaderData()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cover}>
          <img src={photo.urls.regular} alt='' />
          <h1 className={styles.cover_title}>
            <img className={styles.logo} src={logo} alt='logo' />
            <span className={styles.primaryMain}>Creation starts here</span>
            <span className={styles.primarySub}>
              Access 4,896,865 free, high-resolution photos you can’t find anywhere else
            </span>
          </h1>
        </div>
        <h1 className={styles.title}>
          <span className={styles.primaryMain}>Join Unsplash</span>
          <span className={styles.primarySub}>Already have an account? Login</span>
        </h1>
        <AuthForm />
      </div>
    </>
  )
}

export default Signup

export async function loader() {
  const BASE_URL = 'https://api.unsplash.com/'
  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  let INDEX_URL = `${BASE_URL}photos/random?${clientID}`

  const response = await fetch(INDEX_URL)

  if (!response.ok) {
    // error handler
  } else {
    const resData = await response.json()
    // 使用 return 將抓到的資料回傳至元件使用
    return resData
  }
}

export async function action({ request }) {
  const data = await request.formData()

  const email = data.get('email')
  const password = data.get('password')

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    const user = userCredential.user
    console.log(user)

    return redirect('/')
  } catch (error) {
    console.log(error)
  }

  return null
}
