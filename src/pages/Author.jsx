import { useLocation } from 'react-router'
import styles from './Author.module.scss'
import { ReactComponent as LocationIcon } from '../assets/location.svg'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as CheckIcon } from '../assets/check.svg'
import { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'

const Author = () => {
  const location = useLocation()
  const user = location.state.user
  const [photos, setPhotos] = useState([])

  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  // const per_page = 'per_page=20&page='
  let INDEX_URL = `${user.links.photos}?${clientID}`

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(INDEX_URL)

      if (!response.ok) {
        console.log('fail to fetch data.')
      } else {
        const resData = await response.json()
        setPhotos(resData)
        console.log(photos)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className={styles.profile}>
        <img className={styles.author__img} src={user.profile_image.large} alt='' />
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
      <h3>Photos</h3>
      <div className={styles.waterfall}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  )
}

export default Author
