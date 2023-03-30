import { useState, useEffect } from 'react'
import PhotoCard from '../components/PhotoCard'
import Cover from '../components/Cover'
import styles from './Home.module.scss'
import { useOutletContext } from 'react-router'
import Spinner from '../components/Spinner'

const Home = () => {
  const [photos, setPhotos] = useState([])
  const [keyword, setKeyword] = useOutletContext()

  // API use
  const BASE_URL = 'https://api.unsplash.com/'
  const clientID = 'client_id=cUK75VKddQZYTb5-OA40rh4qg74_oGQOspcSfjtjcAQ'
  const per_page = 'per_page=25&page='
  let INDEX_URL = `${BASE_URL}search/photos?${clientID}&query=${keyword}&${per_page}`
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      // TODO: error handler
      try {
        const response = await fetch(INDEX_URL)
        const resData = await response.json()
        setPhotos(resData.results)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
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
        {isLoading ? <Spinner /> : photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </div>
  )
}

export default Home
