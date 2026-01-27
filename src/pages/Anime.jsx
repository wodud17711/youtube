import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { animeText } from '../data/anime'
import VideoCard from '../components/video/VideoCard'

const Anime = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },300)
  },[])

  const animeClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id='anime' className={animeClass}>
        <h2>🎭 추천 애니 입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={animeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime