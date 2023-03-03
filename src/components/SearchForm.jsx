import styles from './SearchForm.module.scss'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { Form } from 'react-router-dom'

const SearchForm = () => {
  const logo = new URL('../assets/unsplash.png', import.meta.url).href

  return (
    <Form method='post' action='/home' className={styles.searchBar}>
      <input id='search' type='text' name='search' className={styles.searchInput} placeholder='Search images' />
      <button type='submit' className={styles.searchButton}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </Form>
  )
}

export default SearchForm
