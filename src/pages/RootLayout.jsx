import { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const [keyword, setKeyword] = useState('dog')

  const onSearchHandler = (keyword) => {
    setKeyword(keyword)
  }

  return (
    <>
      <Header searchHandler={onSearchHandler} />
      <Outlet context={[keyword, setKeyword]} />
    </>
  )
}

export default RootLayout
