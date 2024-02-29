import React from 'react'
import myimg from '../assets/img/imgC.jpg'
import myimg2 from '../assets/img/bimg.jpg'

export default function Home() {
  return (
    <>
    <section className='home'>

    <div className="left">
      <h3>
        CHAITANYA LONARKAR
      </h3>
      <h1>
        Frontend Devloper
      </h1>
      <h1>
        -FullStack Devloper
      </h1>
    </div>
    <div className="left-img">
       <img src={myimg} alt="Chaitanya"/>
    </div>
    </section>
    </>
  )
}
