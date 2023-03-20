import { useState, useEffect } from 'react'
import PhotoCard from '../components/PhotoCard'
import Cover from '../components/Cover'
import styles from './Home.module.scss'
import { json, useOutletContext } from 'react-router'

const Home = () => {
  const [photos, setPhotos] = useState([])
  const [keyword, setKeyword] = useOutletContext()

  // API use
  const BASE_URL = 'https://api.unsplash.com/'
  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  const per_page = 'per_page=30&page='
  let INDEX_URL = `${BASE_URL}search/photos?${clientID}&query=${keyword}&${per_page}`
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(INDEX_URL)

      if (!response.ok) {
        return json({ message: 'Could not fetch photos.' }, { status: 500 })
      } else {
        const resData = await response.json()
        setPhotos(resData.results)
      }
    }

    fetchData()
  }, [keyword])

  const searchHandler = (keyword) => {
    const query = `query=${keyword}`
    setKeyword(query)
  }

  return (
    <div className={styles.home}>
      <Cover searchHandler={searchHandler} />

      <div className={styles.waterfall}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}

export default Home
