import styles from './Cover.module.scss'
import { NavLink } from 'react-router-dom'

const Cover = ({ searchHandler }) => {
  const types = ['Taiwan', 'Japan', 'Ocean', 'People', 'Camera']

  const onChangeKeywordHandler = (e) => {
    searchHandler(e.target.innerText)
  }

  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.list}>
          {types.map((type) => (
            <li key={type}>
              <NavLink
                className={styles.listLink}
                style={{ textDecoration: 'none' }}
                // activeClassName={styles.active}
                to={`?search=${type}`}
                onClick={onChangeKeywordHandler}
              >
                {type}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cover}>
        <div className={styles.textContainer}>
          <h1 className='heading-primary'>
            <span className={styles.primaryMain}>Unsplash</span>
            <span className={styles.primarySub}>
              The internet's source for visuals.
              <br />
              Powered by creators everywhere.
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Cover
