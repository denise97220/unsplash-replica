import { useLocation } from 'react-router-dom'
import styles from './PhotoDetail.module.scss'

const PhotoDetail = () => {
  const location = useLocation()
  const photo = location.state.photo
  console.log(photo)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.author}>
          <img className={styles.author__img} src={photo.user.profile_image.medium} alt='' />
          <p className={styles.author__name}>{photo.user.name}</p>
        </div>
        <div className={styles.photo}>
          <img className={styles.photo__img} src={photo.urls.regular} alt='' />
        </div>
      </div>
    </>
  )
}

export default PhotoDetail
