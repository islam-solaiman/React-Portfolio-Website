import React from 'react'
import  './main.css'

export default function Main() {
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>NodeJs & Express</button>
      </section>

      <section className='border right-section'>
        <article className='card'>
          <img src='' alt=''/>
          <div style={{width:"266px"}} className='border box'>
            <h1 classname='title'>
              My Gallery
            </h1>
            <p className='sub-title'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            </p>
            <div className='flex'>
              <div></div>
              <div className='icon-link'></div>
              <div className='icon-github'></div>
              <a href="#">
                More
                <span className='icon-arrow_forward'></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
