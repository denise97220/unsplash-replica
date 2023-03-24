import styles from './PhotoCard.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import { ReactComponent as HeartLikeIcon } from '../assets/heart_like.svg'
import { ReactComponent as DownloadIcon } from '../assets/download.svg'
import { collectionAction } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import useAuth from '../custom-hooks/useAuth'

// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'

const PhotoCard = ({ photo }) => {
  const dispatch = useDispatch()
  const currentUser = useAuth()
  // const [isLiked, setIsLiked] = useState(false)
  const collection = useSelector((state) => state)

  const likeHandler = () => {
    if (!currentUser) {
      return alert('請先登入')
    }
    dispatch(collectionAction.like(photo))
  }

  return (
    <div className={styles.photoCard}>
      {/* use Route to pass photo */}
      <Link className={styles.photo__link} to={`/photo/${photo.id}`} state={{ photo: photo }}>
        <div className={styles.photo}>
          {/* seems lazy loading not work🤔 */}
          <img
            className={styles.photo__img}
            src={photo.urls.small_s3}
            alt='image'
            loading='lazy'
            height={500}
            width={333}
          />
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
          <HeartIcon className={`${styles.icon} ${styles.LikeIcon}`} />
        </div>
        <div className={styles.buttonBox}>
          <a href={photo.urls.small_s3}>
            <DownloadIcon className={`${styles.icon} ${styles.downloadIcon}`} />
          </a>
        </div>
      </div>
      <div className={`${styles.button} ${styles.button__phone}`}>
        <div className={styles.buttonBox} onClick={likeHandler}>
          <HeartIcon className={`${styles.icon} ${styles.LikeIcon}`} />
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
