import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/today'
import Music from '../components/contents/Music'
import VideoSlider from '../components/video/VideoSlider'
import { movieText } from '../data/movie'
import { bookText } from '../data/book'
import { animeText } from '../data/anime'
import { musicText } from '../data/music'
import { todayText } from '../data/today'

const Home = () => {
  return (
    <Main>
      <Today videos={todayText} id='today'/>
      <Music videos={musicText} title='🎶 추천 음악입니다' id='music'/>
      <VideoSlider videos={movieText} title='🎞 추천 영화입니다' id='movie'/>
      <VideoSlider videos={bookText} title='📔 추천 도서입니다' id='book'/>
      <VideoSlider videos={animeText} title='🎭 추천 애니입니다' id='anime'/>
    </Main>
  )
}


export default Home