import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { bookText } from '../data/book'

const Book = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },300)
  },[])

  const bookClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id="book" className={bookClass}>
        <h2>📔 추천 도서 입니다.</h2>
        <div className='video__inner'>  
          <VideoCard videos={bookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book