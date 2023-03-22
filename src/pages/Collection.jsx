import { useSelector } from 'react-redux'
import PhotoCard from '../components/PhotoCard'
import styles from './Collection.module.scss'

const Collection = () => {
  const collection = useSelector((state) => state)

  return (
    <>
      <div className={styles.waterfall}>
        {collection.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  )
}

export default Collection
