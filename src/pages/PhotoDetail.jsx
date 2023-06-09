import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PhotoCard from '../components/PhotoCard'
import styles from './PhotoDetail.module.scss'
import Spinner from '../components/Spinner'

const PhotoDetail = () => {
  const location = useLocation()
  const photo = location.state.photo
  const [relatedPhotos, setRelatedPhotos] = useState([])
  const randomTags = ['Travel', 'Wallpapers', 'Night', 'City']
  const [isLoading, setIsLoading] = useState(false)

  // API use
  const BASE_URL = 'https://api.unsplash.com/'
  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  const per_page = 'per_page=12&page='
  let INDEX_URL = `${BASE_URL}search/photos?${clientID}&query=${
    photo.tags ? photo.tags[2].title : randomTags[Math.floor(Math.random() * 4)]
  }&${per_page}`

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(INDEX_URL)
        const resData = await response.json()
        setRelatedPhotos(resData.results)
        window.scrollTo(0, 0)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [photo])

  return (
    <>
      <div className={styles.card}>
        <Link to={`/author/@${photo.user.username}`} state={{ user: photo.user }}>
          <div className={styles.author}>
            <img className={styles.author__img} src={photo.user.profile_image.medium} alt='' />
            <p className={styles.author__name}>{photo.user.name}</p>
          </div>
        </Link>

        <div className={styles.photo}>
          <img className={styles.photo__img} src={photo.urls.regular} alt='' />
        </div>
      </div>
      <div className={styles.information}>
        <h3 className={styles.information__title}>Description</h3>
        <p className={styles.information__content}>
          {photo.alt_description ? photo.alt_description : "There's no description here."}
        </p>
      </div>
      <div className={styles.tags}>
        <h3 className={styles.tags__title}>Related tags</h3>
        {photo.tags
          ? photo.tags.map((tag) => (
              <div className={styles.tag} key={tag.title}>
                {tag.title}
              </div>
            ))
          : randomTags.map((tag) => (
              <div className={styles.tag} key={tag}>
                {tag}
              </div>
            ))}
      </div>
      <div className={styles.related_photos}>
        <h3 className={styles.photos__title}>Related photos</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.waterfall}>
            {relatedPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default PhotoDetail
