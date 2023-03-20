import styles from './PhotoCard.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
// import { useEffect, useState } from 'react'

const PhotoCard = ({ photo }) => {
  // const [passPhoto, setPassPhoto] = useState({})
  // const BASE_URL = 'https://api.unsplash.com/'
  // const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  // let INDEX_URL = `${BASE_URL}photos/${photo.id}?${clientID}`

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(INDEX_URL)

  //     if (!response.ok) {
  //       console.log('fail to fetch data.')
  //     } else {
  //       const resData = await response.json()
  //       setPassPhoto(resData)
  //     }
  //   }

  //   if (photo.tags) {
  //     setPassPhoto(photo)
  //   } else {
  //     fetchData()
  //   }

  //   console.log(passPhoto)
  // }, [])

  return (
    <div className={styles.photoCard}>
      {/* use Route to pass photo */}
      <Link className={styles.link} to={`/photo/${photo.id}`} state={{ photo: photo }}>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={photo.urls.regular} alt='' />
        </div>
      </Link>
      <Link className={styles.link} to={`/author/@${photo.user.username}`} state={{ user: photo.user }}>
        <div className={styles.author}>
          <img className={styles.author__img} src={photo.user.profile_image.medium} alt='' />
          <p className={styles.author__name}>{photo.user.name}</p>
        </div>
      </Link>
      <div className={styles.button}>
        <div className={styles.buttonBox}>
          <HeartIcon className={styles.heartIcon} />
        </div>
        <div className={styles.buttonBox}>
          <HeartIcon className={styles.heartIcon} />
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
