import { useSelector } from 'react-redux'
import PhotoCard from '../components/PhotoCard'
import styles from './Collection.module.scss'

const Collection = () => {
  const collection = useSelector((state) => state)

  return (
    <>
      {collection.length == 0 ? (
        <p className={styles.alert}>Oh no! There's nothing here :(</p>
      ) : (
        <p className={styles.title}>Collection</p>
      )}
      <div className={styles.waterfall}>
        {collection.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  )
}

export default Collection
