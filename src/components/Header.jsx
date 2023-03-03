import styles from './Header.module.scss'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ searchHandler }) => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href
  const inputRef = useRef('')
  const location = useLocation()
  const navigate = useNavigate()

  const clickHandler = () => {
    const value = inputRef.current.value
    if (value.trim() === '') return

    searchHandler(value)

    if (location.pathname !== '/') {
      return navigate(`/?search=${value}`)
    }
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
          />
          <div className={styles.searchButton}>
            <SearchIcon className={styles.searchIcon} onClick={clickHandler} />
          </div>
        </div>
        <input className={styles.toggle} type='checkbox' id='navbar-toggle' />
        <nav className={styles.nav}>
          <ul className=''>
            <Link to='/login'>
              <li className=''>Log in</li>
            </Link>
          </ul>
        </nav>
        <label className={styles.hamburgerContainer} htmlFor='navbar-toggle'>
          <span className={styles.hamburger}></span>
        </label>
      </header>
    </>
  )
}

export default Header
