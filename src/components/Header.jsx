import styles from './Header.module.scss'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../custom-hooks/useAuth'
import { auth } from '../firebase.config'
import { signOut } from 'firebase/auth'

const Header = ({ searchHandler }) => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href
  const inputRef = useRef('')
  const location = useLocation()
  const navigate = useNavigate()
  const currentUser = useAuth()

  const clickHandler = () => {
    const value = inputRef.current.value
    if (value.trim() === '') return

    searchHandler(value)

    if (location.pathname !== '/') {
      return navigate(`/?search=${value}`)
    }
  }

  const KeyUpHandler = (event) => {
    if (event.key === 'Enter') {
      const value = inputRef.current.value
      if (value.trim() === '') return

      searchHandler(value)

      if (location.pathname !== '/') {
        return navigate(`/?search=${value}`)
      }
    }
  }

  const logOutHandler = () => {
    signOut(auth)
      .then(() => console.log('success log out'))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt='logo' />
          </Link>
        </div>
        <div className={styles.searchBar}>
          <input
            id='search'
            type='text'
            name='search'
            className={styles.searchInput}
            placeholder='Search images'
            ref={inputRef}
            onKeyUp={KeyUpHandler}
          />
          <div className={styles.searchButton}>
            <SearchIcon className={styles.searchIcon} onClick={clickHandler} />
          </div>
        </div>
        <input className={styles.toggle} type='checkbox' id='navbar-toggle' />
        <nav className={styles.nav}>
          <ul className={styles.nav__ul}>
            {!currentUser && (
              <Link to='/login'>
                <li className=''>Log in</li>
              </Link>
            )}
            <Link to='/signup'>
              <li className=''>Sign up</li>
            </Link>
            {currentUser && (
              <li onClick={logOutHandler} className=''>
                Log out
              </li>
            )}
            <Link to='/collection'>
              <li className=''>Collection</li>
            </Link>
            <a href='https://unsplash.com/about'>
              <li className=''>About</li>
            </a>
          </ul>
        </nav>
        <label className={styles.hamburgerContainer} htmlFor='navbar-toggle'>
          <span className={styles.hamburger}></span>
        </label>
        {/* 桌機版 header */}
        <nav className={styles.nav__desktop}>
          <ul className={styles.desktop__ul}>
            {!currentUser && (
              <Link to='/login'>
                <li className=''>Log in</li>
              </Link>
            )}
            <Link to='/signup'>
              <li className=''>Sign up</li>
            </Link>
            {currentUser && (
              <li onClick={logOutHandler} className=''>
                Log out
              </li>
            )}
            <Link to='/collection'>
              <li className=''>Collection</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
