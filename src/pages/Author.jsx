import { useLocation } from 'react-router'
import styles from './Author.module.scss'
import { ReactComponent as LocationIcon } from '../assets/location.svg'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as CheckIcon } from '../assets/check.svg'
import { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'
import Spinner from '../components/Spinner'
import Alert from '@mui/material/Alert'

const Author = () => {
  const location = useLocation()
  const user = location.state.user
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  let INDEX_URL = `${user.links.photos}?${clientID}`

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(INDEX_URL)
        const resData = await response.json()
        setPhotos(resData)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className={styles.profile}>
        <img className={styles.author__img} src={user.profile_image.large} alt='' />
        <div className={styles.author__profile}>
          <h3 className={styles.author__name}>{user.name}</h3>
          <p className={styles.author__bio}>{user.bio}</p>
          <ul className={styles.information}>
            <li>
              <CheckIcon className={`${styles.icon} ${styles.CheckIcon}`} />
              <p>Available for hire</p>
            </li>
            <li className={styles.location}>
              <LocationIcon className={`${styles.icon} ${styles.locationIcon}`} />
              <p>{user.location}</p>
            </li>
            <a href={`https://www.instagram.com/${user.social.instagram_username}`}>
              <li>
                <InstagramIcon className={`${styles.icon} ${styles.instagramIcon}`} />
                <p>Instagram</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <h3 className={styles.photos}>Photos</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.waterfall}>
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
      {/* {error && <Alert severity='error'>{error}</Alert>} */}
    </>
  )
}

export default Author
