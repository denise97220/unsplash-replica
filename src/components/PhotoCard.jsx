import styles from './PhotoCard.module.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'

const PhotoCard = ({ photo }) => {
  return (
    <div className={styles.photoCard}>
      {/* use Route to pass photo */}
      <Link className={styles.link} to={`/photo/${photo.id}`} state={{ photo: photo }}>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={photo.urls.regular} alt='' />
        </div>
      </Link>
      <div className={styles.author}>
        <img className={styles.author__img} src={photo.user.profile_image.medium} alt='' />
        <p className={styles.author__name}>{photo.user.name}</p>
      </div>
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
