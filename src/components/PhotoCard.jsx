import styles from './PhotoCard.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import { ReactComponent as DownloadIcon } from '../assets/download.svg'
import { collectionAction } from '../store/store'
import { useDispatch } from 'react-redux'
import LazyLoad from 'react-lazy-load'
// import { useEffect, useState } from 'react'

const PhotoCard = ({ photo }) => {
  const dispatch = useDispatch()
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

  const likeHandler = () => {
    dispatch(collectionAction.like(photo))
  }

  return (
    <div className={styles.photoCard}>
      {/* use Route to pass photo */}
      <Link className={styles.photo__link} to={`/photo/${photo.id}`} state={{ photo: photo }}>
        <div className={styles.photo}>
          {/* seems not work🤔 */}
          <LazyLoad threshold={0.95}>
            <img className={styles.photo__img} src={photo.urls.small_s3} alt='' loading='lazy' />
          </LazyLoad>
        </div>
      </Link>
      <Link
        className={`${styles.author__link} ${styles.hover}`}
        to={`/author/@${photo.user.username}`}
        state={{ user: photo.user }}
      >
        <div className={styles.author}>
          <img className={styles.author__img} src={photo.user.profile_image.medium} alt='' />
          <p className={styles.author__name}>{photo.user.name}</p>
        </div>
      </Link>
      <div className={`${styles.button} ${styles.button__hover} ${styles.hover}`}>
        <div className={styles.buttonBox} onClick={likeHandler}>
          <HeartIcon className={`${styles.icon} ${styles.heartIcon}`} />
        </div>
        <div className={styles.buttonBox}>
          <a href={photo.urls.small_s3}>
            <DownloadIcon className={`${styles.icon} ${styles.downloadIcon}`} />
          </a>
        </div>
      </div>
      <div className={`${styles.button} ${styles.button__phone}`}>
        <div className={styles.buttonBox} onClick={likeHandler}>
          <HeartIcon className={`${styles.icon} ${styles.heartIcon}`} />
        </div>
        <div className={styles.buttonBox}>
          <a href={photo.urls.small_s3}>
            <DownloadIcon className={`${styles.icon} ${styles.downloadIcon}`} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
