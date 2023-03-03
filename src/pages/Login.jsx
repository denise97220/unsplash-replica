import { Link } from 'react-router-dom'

const Login = () => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href

  return (
    <>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img className='' src={logo} alt='logo' />
          </Link>
          <h1 className='heading-primary'>
            <span className='primaryMain'>Login</span>
            <span className='primarySub'>Welcome back.</span>
          </h1>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Login
