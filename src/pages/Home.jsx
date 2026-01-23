import React from 'react'
import Main from '../components/section/Main'
import Anime from '../components/contents/Anime'
import Today from '../components/contents/today'
import Music from '../components/contents/Music'
import Movie from '../components/contents/Movie'
import Book from '../components/contents/Book'

const Home = () => {
  return (
    <Main>
      <Today/>
      <Music/>
      <Movie/>
      <Book/>
      <Anime/>
    </Main>
  )
}

export default Home